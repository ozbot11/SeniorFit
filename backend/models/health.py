from flask_pymongo import PyMongo

def init_health_model(app):
    mongo = PyMongo(app)
    return mongo.db.health