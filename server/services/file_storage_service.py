import uuid
import aiofiles
import os

from config.config import *

class FileStorageService():
    async def _save_file_bytes(self, file_bytes, path):
        async with aiofiles.open(path, "wb") as file:
            await file.write(file_bytes)

    async def save_media(self, files, id):
        path = video_ideas_folder + id
        os.mkdir(path)

        for file in files:
            file_extension = ""
            if "." in file.filename: 
                file_extension = "." + file.filename.split(".")[1]

            file_path = path + "/" + uuid.uuid4().hex + file_extension
            file_bytes = await file.read()
            
            await self._save_file_bytes(file_bytes, file_path)

    async def _get_media(self, path):
        async with aiofiles.open(path, "rb") as file:
            return await file.read()

    async def get_natalie_image(self):
        print(static_folder + "natalie.jpg")
        return await self._get_media(static_folder + "natalie.jpg")