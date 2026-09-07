class OrderService():
    def __init__(self, order_database):
        self.order_database = order_database

    async def new_order(self, name, description, contacts):
        await self.order_database.new_order(name, description, contacts)