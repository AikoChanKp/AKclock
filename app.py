from flask import Flask, render_template, request, jsonify
import time
import threading

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start_countdown', methods=['POST'])
def start_countdown():
    data = request.get_json()
    minutes = data.get('minutes', 0)
    seconds = minutes * 60

    def countdown():
        while seconds > 0:
            time.sleep(1)
            seconds -= 1

    threading.Thread(target=countdown).start()
    return jsonify({"message": "Countdown started!"})

if __name__ == '__main__':
    app.run(debug=True)


