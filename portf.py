#!/usr/bin/python3

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    user_agent = request.user_agent.string
    if "Mobile" in user_agent:
        return render_template('Mindex.html')
    else:
        return render_template('index.html')
    

@app.route('/about')
def about():
    user_agent = request.user_agent.string
    if "Mobile" in user_agent:
        return render_template('Mabout.html')
    else:
        return render_template('about.html')
   

@app.route('/contact')
def contact():
    user_agent = request.user_agent.string
    if "Mobile" in user_agent:
        return render_template('Mcontact.html')
    else:
        return render_template('contact.html')
    

@app.route('/projects')
def projects():
    user_agent = request.user_agent.string
    if "Mobile" in user_agent:
        return render_template('Mprojects.html')
    else:
        return render_template('projects.html')
    

@app.route('/projects/<project_name>')
def project_detail(project_name):
    user_agent = request.user_agent.string
    if "Mobile" in user_agent:
        return render_template(f'Mprojects/{project_name}.html')
    else:
        return render_template(f'projects/{project_name}.html')
    

@app.route('/education')
def education():
    user_agent = request.user_agent.string
    if "Mobile" in user_agent:
        return render_template('Meducation.html')
    else:
        return render_template('education.html')
    




if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)
