from flask_pymongo import PyMongo

def init_quest_model(app):
    mongo = PyMongo(app)
    return mongo.db.quests
