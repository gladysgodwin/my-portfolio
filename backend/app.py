from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

# Route to show the contact form
@app.route('/api/contact')
def contact_form():
    return render_template('index.html')

# Route to submit the contact form
@app.route('/api/submit_contact', methods=['POST'])
def submit_contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Do something with the data, e.g. save to database or send notification

    # Return a response to the client
    response = {
        'name': name,
        'email': email,
        'message': message,
        'status': 'success'
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run()
