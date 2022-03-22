import json
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/todo")
def helloWorld():
    with open("data.json", "r") as json_file:
        data = json_file.read()
        return data

app.run()