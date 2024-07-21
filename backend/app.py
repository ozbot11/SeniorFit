# from flask import Flask
# from flask_cors import CORS
# from routes.profile import init_profile_routes
# from routes.exercise import init_exercise_routes
# from routes.health import init_health_routes

# app = Flask(__name__)
# CORS(app)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/seniorfit"

# init_profile_routes(app)
# init_exercise_routes(app)
# init_health_routes(app)

# if __name__ == '__main__':
#     app.run(port=3001, debug=True)



# from flask import Flask
# from flask_cors import CORS
# from routes.profile import init_profile_routes
# from routes.exercise import init_exercise_routes
# from routes.health import init_health_routes

# app = Flask(__name__)
# CORS(app)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/seniorfit"

# init_profile_routes(app)
# init_exercise_routes(app)
# init_health_routes(app)

# if __name__ == '__main__':
#     app.run(port=3001, debug=True)







# from flask import Flask
# from flask_cors import CORS
# from routes.profile import init_profile_routes
# from routes.exercise import init_exercise_routes
# from routes.health import init_health_routes

# app = Flask(__name__)
# CORS(app)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/seniorfit"

# init_profile_routes(app)
# init_exercise_routes(app)
# init_health_routes(app)

# if __name__ == '__main__':
#     app.run(port=3001, debug=True)




# from flask import Flask
# from flask_cors import CORS
# from routes.profile import init_profile_routes
# from routes.exercise import init_exercise_routes
# from routes.health import init_health_routes
# import logging

# app = Flask(__name__)
# CORS(app)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/seniorfit"

# logging.basicConfig(level=logging.DEBUG)

# init_profile_routes(app)
# init_exercise_routes(app)
# init_health_routes(app)

# if __name__ == '__main__':
#     app.run(port=3001, debug=True)






# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from routes.profile import init_profile_routes
# from routes.exercise import init_exercise_routes
# from routes.health import init_health_routes
# import torch
# from torchvision.models import densenet201
# from torchvision import transforms
# from PIL import Image
# import os

# app = Flask(__name__)
# CORS(app)

# app.config["MONGO_URI"] = "mongodb://localhost:27017/seniorfit"

# init_profile_routes(app)
# init_exercise_routes(app)
# init_health_routes(app)

# device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
# model = densenet201(weights=None)
# SAVE_PATH = "densenet201.pth"
# if os.path.exists(SAVE_PATH):
#     model.load_state_dict(torch.load(SAVE_PATH))
# model.to(device)
# model.eval()

# preprocess = transforms.Compose([
#     transforms.Resize(256),
#     transforms.CenterCrop(224),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
# ])

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'eye-scan' not in request.files:
#         return jsonify({'error': 'No file part'})
    
#     file = request.files['eye-scan']
#     if file.filename == '':
#         return jsonify({'error': 'No selected file'})
    
#     if file:
#         img = Image.open(file.stream).convert('RGB')
#         img = preprocess(img).unsqueeze(0).to(device)
        
#         with torch.no_grad():
#             output = model(img)
#             probabilities = torch.nn.functional.softmax(output[0], dim=0)
#             confidence, predicted_class = torch.max(probabilities, 0)
        
#         class_names = ["NORMAL", "DRUSEN", "CNV", "DME"]
#         predicted_class_name = class_names[predicted_class.item()]
        
#         return jsonify({
#             'predicted_class': predicted_class_name,
#             'confidence': confidence.item()
#         })

# if __name__ == '__main__':
#     app.run(port=3001, debug=True)




from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.profile import init_profile_routes
from routes.exercise import init_exercise_routes
from routes.health import init_health_routes
import torch
from torchvision.models import densenet201
from torchvision import transforms
from PIL import Image
import os

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/seniorfit"

init_profile_routes(app)
init_exercise_routes(app)
init_health_routes(app)

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
model = densenet201(weights=None)
# SAVE_PATH = "densenet201.pth"
SAVE_PATH = "densenet201.1.pth"
if os.path.exists(SAVE_PATH):
    model.load_state_dict(torch.load(SAVE_PATH, map_location=device))
model.to(device)
model.eval()

preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'eye-scan' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['eye-scan']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        img = Image.open(file.stream).convert('RGB')
        img = preprocess(img).unsqueeze(0).to(device)
        
        with torch.no_grad():
            output = model(img)
            probabilities = torch.nn.functional.softmax(output[0], dim=0)
            confidence, predicted_class = torch.max(probabilities, 0)
        class_names = ["NORMAL", "DRUSEN", "CNV", "DME"]
        print("Writing Predicted Class Name:")
        print(predicted_class.item())
        predicted_class_name = class_names[predicted_class.item()]
        
        return jsonify({
            'predicted_class': predicted_class_name,
            'confidence': confidence.item()
        }), 200

if __name__ == '__main__':
    app.run(port=3001, debug=True)
