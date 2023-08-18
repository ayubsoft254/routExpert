# RouteXpert 

RouteXpert is a web application that optimizes routes for personal vehicles, helping users find the most efficient paths between multiple destinations.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly interface for inputting multiple destinations.
- Efficient route optimization algorithm to minimize travel time.
- Interactive map visualization using Mapbox.
- User authentication and personalized route history (future feature).

## Getting Started

### Prerequisites

- Node.js (https://nodejs.org/)
- Python 3 and pip (https://www.python.org/)
- Git (https://git-scm.com/)

### Installation

1. Clone this repository:
  git clone https://github.com/ayubsoft254/routExpert.git
  cd routExpert

2. Install frontend dependencies and start the development server:
```sh
  cd frontend
  npm install
  npm start
3. In a new terminal, set up the backend environment and start the server:
  cd backend
  python -m venv venv
  source venv/bin/activate   # On Windows: venv\Scripts\activate
  pip install -r requirements.txt
  python app.py

## Usage
Access the RouteXpert web application in your browser at http://localhost:3000.
Input your destinations and click "Optimize Route."
View the optimized route on the interactive map.

## API Documentation
The RouteXpert backend provides the following API endpoints:

POST /api/optimize_route: Optimize the route based on input destinations.
GET /api/user/:id/routes: Retrieve route history for a user (future feature).

## Contributing
Contributions are welcome! If you'd like to contribute to RouteXpert, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test thoroughly.
Commit your changes and push to your fork.
Submit a pull request to the main repository.

## License
This project is licensed under the MIT License.

