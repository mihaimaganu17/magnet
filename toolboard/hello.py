from flask import Flask, render_template
app = Flask(__name__)

@app.route("/header.jsx", methods=['GET'])
def header():
    with open("./app/header.jsx", "r") as f:
        data = f.read()
    response = app.response_class(
        data
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/")
def hello():
    return "Hello world!"