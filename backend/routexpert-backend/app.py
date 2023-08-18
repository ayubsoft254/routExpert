# backend/app.py

from flask import Flask, request, jsonify
from route_optimization import calculate_distance, nearest_neighbor

app = Flask(__name__)

# ... other app configurations ...

@app.route('/api/optimize_route', methods=['POST'])
def optimize_route():
    data = request.get_json()

    start_point = data['start_point']
    destinations = data['destinations']

    optimized_route = nearest_neighbor(start_point, destinations)

    return jsonify({'optimized_route': optimized_route})

if __name__ == '__main__':
    app.run(debug=True)
