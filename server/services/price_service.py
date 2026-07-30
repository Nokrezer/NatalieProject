class PriceService():
    def __init__(self, price_database):
        self.price_database = price_database

    async def get_prices(self):
        return await self.price_database.get_prices()