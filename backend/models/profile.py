from flask_pymongo import PyMongo

def init_profile_model(app):
    mongo = PyMongo(app)
    return mongo.db.profiles