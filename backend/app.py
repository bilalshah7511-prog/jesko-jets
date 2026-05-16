from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime
import pytz

app = Flask(__name__)
CORS(app)

CITIES = [
    {"name": "Dubai", "timezone": "Asia/Dubai"},
    {"name": "Riyadh", "timezone": "Asia/Riyadh"},
    {"name": "Seoul", "timezone": "Asia/Seoul"},
    {"name": "Bangkok", "timezone": "Asia/Bangkok"},
    {"name": "Tel Aviv", "timezone": "Asia/Jerusalem"},
    {"name": "Tokyo", "timezone": "Asia/Tokyo"},
    {"name": "Cairo", "timezone": "Africa/Cairo"},
]

@app.route('/api/cities', methods=['GET'])
def get_cities():
    response_data = []
    for city in CITIES:
        tz = pytz.timezone(city['timezone'])
        local_time = datetime.now(tz).strftime('%H:%M')
        response_data.append({
            "name": city["name"],
            "time": local_time
        })
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
