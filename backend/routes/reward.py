# from flask import Blueprint, request, jsonify
# from models.reward import init_reward_model

# reward_bp = Blueprint('reward', __name__)
# reward_model = None

# @reward_bp.route('/', methods=['GET'])
# def get_rewards():
#     rewards = list(reward_model.find())
#     for reward in rewards:
#         reward['_id'] = str(reward['_id'])
#     return jsonify(rewards), 200

# @reward_bp.route('/redeem', methods=['POST'])
# def redeem_reward():
#     reward_id = request.json.get('reward_id')
#     user_id = request.json.get('user_id')
#     # Implement reward redemption logic here
#     return jsonify({'message': 'Reward redeemed'}), 200

# def init_reward_routes(app):
#     global reward_model
#     reward_model = init_reward_model(app)
#     app.register_blueprint(reward_bp, url_prefix='/reward')




# from flask import Blueprint, request, jsonify
# from models.quest import init_quest_model
# import random

# quest_bp = Blueprint('quest', __name__)
# quest_model = None

# @quest_bp.route('/', methods=['GET'])
# def get_quests():
#     quests = list(quest_model.find())
#     for quest in quests:
#         quest['_id'] = str(quest['_id'])
#     return jsonify(quests), 200

# @quest_bp.route('/complete', methods=['POST'])
# def complete_quest():
#     quest_id = request.json.get('quest_id')
#     user_id = request.json.get('user_id')
#     quest = quest_model.find_one_and_update(
#         {'_id': quest_id, 'user_id': user_id},
#         {'$set': {'completion_status': True}},
#         return_document=True
#     )
#     return jsonify({'message': 'Quest completed'}), 200

# def init_quest_routes(app):
#     global quest_model
#     quest_model = init_quest_model(app)
#     app.register_blueprint(quest_bp, url_prefix='/quest')

# @quest_bp.route('/random', methods=['GET'])
# def random_quest():
#     quests = list(quest_model.find())
#     for quest in quests:
#         quest['_id'] = str(quest['_id'])
#     return jsonify(quests[random.randint(0, len(quests))]), 200


from flask import Blueprint, request, jsonify
from models.reward import init_reward_model
import random

reward_bp = Blueprint('reward', __name__)
reward_model = None

@reward_bp.route('/', methods=['GET'])
def get_rewards():
    rewards = list(reward_model.find())
    for reward in rewards:
        reward['_id'] = str(reward['_id'])
    return jsonify(rewards), 200

@reward_bp.route('/redeem', methods=['POST'])
def redeem_reward():
    reward_id = request.json.get('reward_id')
    user_id = request.json.get('user_id')
    # Implement reward redemption logic here
    return jsonify({'message': 'Reward redeemed'}), 200

@reward_bp.route('/random', methods=['GET'])
def random_reward():
    rewards = list(reward_model.find())
    if not rewards:
        return jsonify({'error': 'No rewards found'}), 404
    reward = rewards[random.randint(0, len(rewards) - 1)]
    reward['_id'] = str(reward['_id'])
    return jsonify(reward), 200

def init_reward_routes(app):
    global reward_model
    reward_model = init_reward_model(app)
    app.register_blueprint(reward_bp, url_prefix='/reward')