class LogService():
    def __init__(self, log_database):
        self.log_database = log_database

    async def add_error(self, path, error):
        await self.log_database.add_error(path, error)