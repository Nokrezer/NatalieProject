class LogsDatabase():
    def __init__(self, database):
        self.database = database

    async def add_error(self, path, error):
        await self.database.send("""INSERT INTO error_logs(path, error)
                                    VALUES(%s, %s)""", path, error)