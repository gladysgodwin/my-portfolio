from flask import Flask, request

app = Flask(__name__)

@app.route('/app.py', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Do something with the data

    return 'Thank you for submitting the form!'

if __name__ == '__main__':
    app.run()
