class PriceDatabase():
    def __init__(self, database):
        self.database = database

    async def get_prices(self):
        return await self.database.get("""SELECT name, price, description, lead_time
                                        FROM prices""", fetchall=True)