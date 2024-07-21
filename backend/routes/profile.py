from flask import Blueprint, request, jsonify
from models.profile import init_profile_model

profile_bp = Blueprint('profile', __name__)
profile_model = None

@profile_bp.route('/', methods=['POST'])
def create_profile():
    profile_data = request.json
    profile_model.insert_one(profile_data)
    return jsonify({"message": "Profile saved"}), 201

def init_profile_routes(app):
    global profile_model
    profile_model = init_profile_model(app)
    app.register_blueprint(profile_bp, url_prefix='/profile')
