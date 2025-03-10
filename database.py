from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["seminar_hall_db"]
users_collection = db["users"]
bookings_collection = db["bookings"]
