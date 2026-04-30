import os
import requests
import jwt
import datetime
import bcrypt
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from functools import wraps
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.environ.get("MAIL_PASSWORD")
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get("MAIL_USERNAME")

mail = Mail(app)

# Supabase configuration
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
JWT_SECRET = os.environ.get("JWT_SECRET_KEY")

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json"
}

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            # Remove 'Bearer ' if present
            if token.startswith('Bearer '):
                token = token[7:]
            data = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        except Exception as e:
            return jsonify({'message': 'Token is invalid or expired!'}), 401
        return f(*args, **kwargs)
    return decorated

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    try:
        payload = {"email": email, "password_hash": hashed}
        url = f"{SUPABASE_URL}/rest/v1/users"
        response = requests.post(url, headers=HEADERS, json=payload)

        if response.status_code == 409:
            return jsonify({"error": "An account with this email already exists. Please log in instead."}), 409
        
        response.raise_for_status()
        return jsonify({"message": "User created successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    try:
        url = f"{SUPABASE_URL}/rest/v1/users?email=eq.{email}&select=*"
        response = requests.get(url, headers=HEADERS)
        users = response.json()

        if not users:
            return jsonify({"error": "Invalid email or password"}), 401

        user = users[0]
        if bcrypt.checkpw(password.encode('utf-8'), user['password_hash'].encode('utf-8')):
            token = jwt.encode({
                'user_id': user['id'],
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
            }, JWT_SECRET, algorithm="HS256")
            
            return jsonify({'token': token}), 200
        else:
            return jsonify({"error": "Invalid email or password"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/projects', methods=['GET'])
def get_projects():
    try:
        url = f"{SUPABASE_URL}/rest/v1/projects?select=*"
        response = requests.get(url, headers=HEADERS)
        response.raise_for_status()
        return jsonify(response.json()), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/contacts', methods=['POST'])
def save_contact():
    data = request.json
    try:
        # Save to Supabase
        url = f"{SUPABASE_URL}/rest/v1/contacts"
        response = requests.post(url, headers=HEADERS, json=data)
        response.raise_for_status()

        # Build Email Notification
        request_callback = data.get('requestCallback', False)
        phone = data.get('phone', 'Not provided')

        subject = f"🔔 {'CALLBACK REQUEST' if request_callback else 'New Portfolio Lead'}: {data.get('name')}"
        body = f"""You have a new {'CALLBACK REQUEST' if request_callback else 'message'} from your portfolio!

Name: {data.get('name')}
Email: {data.get('email')}
Phone: {phone}
{'⚠️  CLIENT WANTS A CALLBACK — Please call: ' + phone if request_callback else ''}

Message:
{data.get('message')}
        """

        msg = Message(
            subject=subject,
            recipients=["mutethiaamstrong@gmail.com"],
            body=body
        )
        mail.send(msg)

        return jsonify({"message": "Message sent successfully!"}), 201
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)

