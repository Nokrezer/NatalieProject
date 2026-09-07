from os import getenv

SERVER_IP = "localhost"
SERVER_PORT = 9000
REALTIME_PORT = 8010

#Префиксы эндпоинтов
API_PREFIX = "/api"
AUTH_PREFIX = "/auth"
STATIC_PREFIX = ""

CERT = "../certs/fullchain.pem"
CERT_KEY = "../certs/privkey.pem"
USE_CERTS = False#Если false сертификаты не используются

project_folder = "/home/nokrezer/Рабочий стол/NatalieProject/"
users_data_folder = project_folder + "UsersData/"
video_ideas_folder = users_data_folder + "VideoIdeas/"
static_folder = project_folder + "static/"