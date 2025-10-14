from flask import Flask, send_file
app = Flask(__name__)

@app.route("/header.jsx", methods=['GET'])
def header():
    with open("/ui_update/header.jsx", "r") as f:
        data = f.read()
    response = app.response_class(
        data
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/")
def hello():
    return "Hello World!"