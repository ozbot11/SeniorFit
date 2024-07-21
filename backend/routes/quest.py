from flask import Blueprint, request, jsonify
from models.quest import init_quest_model
import random

quest_bp = Blueprint('quest', __name__)
quest_model = None

@quest_bp.route('/', methods=['GET'])
def get_quests():
    quests = list(quest_model.find())
    for quest in quests:
        quest['_id'] = str(quest['_id'])
    return jsonify(quests), 200

@quest_bp.route('/complete', methods=['POST'])
def complete_quest():
    quest_id = request.json.get('quest_id')
    user_id = request.json.get('user_id')
    quest = quest_model.find_one_and_update(
        {'_id': quest_id, 'user_id': user_id},
        {'$set': {'completion_status': True}},
        return_document=True
    )
    return jsonify({'message': 'Quest completed'}), 200

def init_quest_routes(app):
    global quest_model
    quest_model = init_quest_model(app)
    app.register_blueprint(quest_bp, url_prefix='/quest')

@quest_bp.route('/random', methods=['GET'])
def random_quest():
    quests = list(quest_model.find())
    for quest in quests:
        quest['_id'] = str(quest['_id'])
    return jsonify(quests[random.randint(0, len(quests) - 1)]), 200