def getData():
    with open("data.json", "r") as json_file:
        data = json_file.read()
        return data

def saveData(data):
    with open("data.json", "w") as json_file:
        data = json.dump(data, json_file)