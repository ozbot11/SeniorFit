from flask import Blueprint, request, jsonify
from models.health import init_health_model

health_bp = Blueprint('health', __name__)
health_model = None

@health_bp.route('/', methods=['POST'])
def log_health_data():
    health_data = request.json
    health_model.insert_one(health_data)
    return jsonify({"message": "Health data logged"}), 201

def init_health_routes(app):
    global health_model
    health_model = init_health_model(app)
    app.register_blueprint(health_bp, url_prefix='/health')
