from fastapi import Request, File, UploadFile, Form
from typing import List, Optional
from shared.responses import *

class ApiController():
    def __init__(self, price_service, idea_service, order_service):
        self.price_service = price_service
        self.idea_service = idea_service
        self.order_service = order_service

    async def get_prices(self, request:Request):
            return await self.price_service.get_prices()

    async def send_video_idea(self, request:Request):
        form = await request.form()
        
        await self.idea_service.new_video_idea(files=form.getlist("files"), description=form.get("description"))
        return SuccessResponse()

    async def send_order(self, request:Request):
        form = await request.form()
        
        await self.order_service.new_order(name=form.get("name"),
                                           description=form.get("description"),
                                           contacts=form.get("contacts"))
        return SuccessResponse()

