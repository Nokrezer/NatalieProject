from fastapi import Response
from config.config import *

class StaticController():
    def __init__(self, file_storage_service):
        self.file_storage_service = file_storage_service

    async def natalie_image(self):
        return Response(content=(await self.file_storage_service.get_natalie_image()), media_type="image")