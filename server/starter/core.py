from fastapi import FastAPI

from routes.register_routes import RegisterRoutes

class Core():
    def __init__(self, before_request_middleware, serving_middleware, routers):
        self.serving_middleware = serving_middleware
        self.before_request_middleware = before_request_middleware

        #Сервер
        self.server = FastAPI(lifespan=self.serving_middleware.lifespan)
        
        #регистрация middleware, для срабатывания перед каждым запросом
        self.before_request_middleware.register(server=self.server)

        #Регистрация роутеров и их эндпоинтов
        RegisterRoutes(self.server, *routers)