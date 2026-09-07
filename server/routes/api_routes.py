from fastapi import APIRouter
from config.config import *

class ApiRoutes():
    def __init__(self, api_controller):
        self.router = APIRouter(prefix=API_PREFIX)
        self.controller = api_controller
        self._register()

    def _register(self):
        self.router.add_api_route("/getPrices", self.controller.get_prices, methods=["GET"])
        self.router.add_api_route("/sendVideoIdea", self.controller.send_video_idea, methods=["POST"])
        self.router.add_api_route("/sendOrder", self.controller.send_order, methods=["POST"])