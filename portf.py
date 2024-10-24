#!/usr/bin/python3

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/projects/<project_name>')
def project_detail(project_name):
    return render_template(f'projects/{project_name}.html')

@app.route('/education')
def education():
    return render_template('education.html')




if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
