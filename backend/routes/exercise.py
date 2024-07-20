# from flask import Blueprint, request, jsonify
# from models.exercise import init_exercise_model

# exercise_bp = Blueprint('exercise', __name__)
# exercise_model = None

# @exercise_bp.route('/', methods=['POST'])
# def create_exercise():
#     exercise_data = request.json
#     exercise_model.insert_one(exercise_data)
#     return jsonify({"message": "Profile saved"}), 201

# def init_exercise_routes(app):
#     global exercise_model
#     exercise_model = init_exercise_model(app)
#     app.register_blueprint(exercise_bp, url_prefix='/exercise')

from flask import Blueprint, jsonify
from models.exercise import init_exercise_model

exercise_bp = Blueprint('exercise', __name__)
exercise_model = None

@exercise_bp.route('/', methods=['GET'])
def get_exercises():
    exercises = list(exercise_model.find())
    for exercise in exercises:
        exercise['_id'] = str(exercise['_id'])
    return jsonify(exercises), 200

def init_exercise_routes(app):
    global exercise_model
    exercise_model = init_exercise_model(app)
    app.register_blueprint(exercise_bp, url_prefix='/exercises')