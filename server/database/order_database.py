class OrderDatabase():
    def __init__(self, database):
        self.database = database

    async def new_order(self, name, description, contacts):
        await self.database.send("""INSERT INTO orders(name, description, contacts)
                                    VALUES(%s, %s, %s)""", name, description, contacts)