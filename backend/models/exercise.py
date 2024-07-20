from flask_pymongo import PyMongo

def init_exercise_model(app):
    mongo = PyMongo(app)
    return mongo.db.exercise