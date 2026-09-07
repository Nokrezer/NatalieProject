#Класс для сборки всех контроллеров роутеров
class RegisterRoutes():
    def __init__(self, server, *routers):
        for router in routers:
            server.include_router(router.router)