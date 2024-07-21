from flask_pymongo import PyMongo

def init_reward_model(app):
    mongo = PyMongo(app)
    return mongo.db.rewards
