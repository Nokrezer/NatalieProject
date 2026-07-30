class IdeaDatabase():
    def __init__(self, database):
        self.database = database

    async def save_idea(self, description, id):
        await self.database.send("""INSERT INTO video_ideas(description, id)
                                    VALUES(%s, %s)""", description, id)