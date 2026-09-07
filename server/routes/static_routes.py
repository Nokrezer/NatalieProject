from fastapi import APIRouter
from config.config import *

class StaticRouter():
    def __init__(self, static_controller):
        self.router = APIRouter(prefix=STATIC_PREFIX)
        self.controller = static_controller
        self._register()

    def _register(self):
        self.router.add_api_route("/getNatalieImage", self.controller.natalie_image, methods=["GET"])