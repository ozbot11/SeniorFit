# from flask import Blueprint, request, jsonify
# from models.profile import init_profile_model

# profile_bp = Blueprint('profile', __name__)
# profile_model = None

# @profile_bp.route('/', methods=['POST'])
# def create_profile():
#     profile_data = request.json
#     profile_model.insert_one(profile_data)
#     return jsonify({"message": "Profile saved"}), 201

# def init_profile_routes(app):
#     global profile_model
#     profile_model = init_profile_model(app)
#     app.register_blueprint(profile_bp, url_prefix='/profile')
    # Theme: In 2022, the CDC reported that 30.9% of adults aged 65
    # and older in the US engaged in no physical activity other than
    # their job in the past 30 days. Create a computer science project
    # that either promotes or educates about the importance of fitness to a
    # demographic of senior citizens.











# from flask import Blueprint, request, jsonify
# from models.profile import init_profile_model

# profile_bp = Blueprint('profile', __name__)
# profile_model = None

# @profile_bp.route('/', methods=['POST'])
# def create_profile():
#     profile_data = request.json
#     profile_model.insert_one(profile_data)
#     return jsonify({"message": "Profile saved"}), 201

# def init_profile_routes(app):
#     global profile_model
#     profile_model = init_profile_model(app)
#     app.register_blueprint(profile_bp, url_prefix='/profile')



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
