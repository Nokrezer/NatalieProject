from fastapi.responses import Response


class SuccessResponse():
    def __new__(self):
        return Response(status_code=204)

class ErrorResponse():
    def __new__(self):
        return Response(content="Произошла ошибка", status_code=400)