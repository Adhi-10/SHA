from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "your_secret_key"

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["hall_booking"]
users_collection = db["users"]

@app.route("/")
def home():
    return render_template("login.html")

# ✅ Signup Route
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    name, email, password = data["name"], data["email"], data["password"]

    if users_collection.find_one({"email": email}):
        return jsonify({"message": "Email already exists"}), 400
    
    hashed_password = generate_password_hash(password)
    users_collection.insert_one({"name": name, "email": email, "password": hashed_password})

    session["user"] = email  # ✅ Store user session
    return jsonify({"message": "Signup successful", "redirect": url_for('halls')}), 200  # ✅ Redirect

# ✅ Login Route
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email, password = data["email"], data["password"]

    user = users_collection.find_one({"email": email})
    if user and check_password_hash(user["password"], password):
        session["user"] = email  # ✅ Store session
        return jsonify({"message": "Login successful", "redirect": url_for('halls')}), 200  # ✅ Redirect
    
    return jsonify({"message": "Invalid credentials"}), 401

# ✅ Halls Page (Module 2)
@app.route("/halls")
def halls():
    if "user" not in session:
        return redirect(url_for("home"))  # Redirect if not logged in
    available_halls = ["Seminar Hall 1", "Seminar Hall 2", "Conference Centre", "Kambar Arangam"]
    return render_template("halls.html", halls=available_halls)

if __name__ == "__main__":
    app.run(debug=True)
