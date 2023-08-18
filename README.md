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

```sh
# Clone this repository
git clone https://github.com/ayubsoft254/routExpert.git
cd routExpert

# Install frontend dependencies and start the development server
cd frontend
npm install
npm start

# In a new terminal, set up the backend environment and start the server
cd ../backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py


