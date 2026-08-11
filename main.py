from flask import Flask, render_template

app = Flask(__name__)

#rotas
@app.route("/")
def homepage():
    return render_template("index.html")

@app.route("/projetos")
def projetos():
    return render_template("projetos.html")

@app.route("/nossoprojeto")
def nossoprojeto():
    return render_template("nossoprojeto.html")

if __name__ == "__main__":
    app.run(debug=True, port=5003)