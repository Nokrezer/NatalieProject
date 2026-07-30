import uuid

class IdeaService():
    def __init__(self, idea_database, file_storage_service):
        self.idea_database = idea_database
        self.file_storage_service = file_storage_service

    async def new_video_idea(self, files, description):
        id = uuid.uuid4().hex
        
        if files:
            await self.file_storage_service.save_media(files, id)#сохраняем на диск файлы
        
        return await self.idea_database.save_idea(description, id)