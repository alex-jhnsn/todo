import json
from flask import Flask
from flask_cors import CORS, cross_origin
from data import getData, saveData

app = Flask(__name__)
CORS(app)

@app.route("/todo", methods = ["POST", "GET"])
def todo():
    if request.method == "GET":
        return getData()
    if request.method == "POST":
        return getData()


app.run()