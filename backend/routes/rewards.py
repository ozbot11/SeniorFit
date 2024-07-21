from flask import Blueprint, request, jsonify
from models.reward import init_reward_model

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

def init_reward_routes(app):
    global reward_model
    reward_model = init_reward_model(app)
    app.register_blueprint(reward_bp, url_prefix='/reward')
