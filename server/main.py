import uvicorn

#Конфигурация
from config.config import *
#ядра сервера
from starter.core import Core

#Контроллеры
from controllers.api_controller import ApiController
from controllers.static_controller import StaticController
# from controllers.auth_controller import AuthController

#роутеры
from routes.api_routes import ApiRoutes
from routes.auth_routes import AuthRoutes
from routes.static_routes import StaticRouter

#БД
from database.database import Database
from database.logs_database import LogsDatabase
from database.price_database import PriceDatabase
from database.idea_database import IdeaDatabase
from database.order_database import OrderDatabase

#Сервисы
from services.price_service import PriceService
from services.log_service import LogService
from services.idea_service import IdeaService
from services.file_storage_service import FileStorageService
from services.order_service import OrderService

#middleware
from middleware.middleware import *

class ServiceContainer():
    def __init__(self):
        #БД
        self.database = Database()
        self.log_database = LogsDatabase(self.database)
        self.price_database = PriceDatabase(self.database)
        self.idea_database = IdeaDatabase(self.database)
        self.order_database = OrderDatabase(self.database)

        #Сервисы
        self.file_storage_service = FileStorageService()
        self.order_service = OrderService(self.order_database)
        self.price_service = PriceService(self.price_database)
        self.log_service = LogService(self.log_database)
        self.idea_service = IdeaService(self.idea_database, self.file_storage_service)
        
        #Контроллеры
        self.api_controller = ApiController(price_service=self.price_service,
                                            idea_service=self.idea_service,
                                            order_service=self.order_service)
        self.static_controller = StaticController(file_storage_service=self.file_storage_service)
        # self.auth_controller = AuthController(auth_service=self.auth_service,
        #                                       token_service=self.token_service,
        #                                       log_database=self.log_database)


        #Роутеры
        self.api_router = ApiRoutes(self.api_controller)
        self.static_router = StaticRouter(self.static_controller)
        
        #middleware
        self.serving_middleware = ServingMiddleware(self.database)
        self.before_request_middleware = BeforeRequestMiddleware(log_service=self.log_service)

class RunServer():
    def __init__(self, core):
        self.core = core

    def run_uvicorn(self):#обычный сервер(асинхронная обертка)
        uvicorn.run(self.core.server, 
                    host=SERVER_IP, port=SERVER_PORT,
                    ssl_keyfile=CERT_KEY if USE_CERTS else None,
                    ssl_certfile=CERT if USE_CERTS else None)

def main():
    container = ServiceContainer()

    core = Core(before_request_middleware=container.before_request_middleware,
                serving_middleware=container.serving_middleware,
                routers=[container.api_router, container.static_router])#Главное ядро
    
    run_server = RunServer(core)
    run_server.run_uvicorn()

if __name__ == "__main__":
    main()