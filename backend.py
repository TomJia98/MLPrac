from flask import Flask, request, Response 
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "hello world"

@app.route("/data", methods=["POST", "GET"])
def data():
    if request.method == "GET":
        return "route not done yet"
    if request.method == "POST":
        recieved_data = request.get_json()
        print(recieved_data)
        return "route not done yet"
    

@app.route("/testing", methods=["POST", "GET"])
def testData():
    if request.method == "GET":
        return "route not done yet"
    if request.method == "POST":
        received_data = request.get_json()
        print(received_data)
        with open('data.txt', 'a') as f:
            # Get the answer from the received data
            answer = received_data.get('answer')
            
            # Write the answer to the file, followed by a newline
            f.write(str(answer) + '\n')
            
            # Convert the data array to a string, and write it to the file
            data_str = ', '.join(map(str, received_data.get('data', [])))
            f.write(data_str + '\n')
        return Response(response=json.dumps("training data saved"), status=201)

        

if __name__ == "__main__":
    app.run("localhost", 6969)