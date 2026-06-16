from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/videos")
def videos():
    return render_template("videos.html")

app.run(debug=True)