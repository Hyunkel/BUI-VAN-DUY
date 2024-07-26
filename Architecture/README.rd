# Score Management Project

This project is a backend application using Node.js, Express, MongoDB, and Mongoose to manage user scores. The application includes JWT token generation and functionality for updating user scores.

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Acknowledgements](#acknowledgements)

## Requirements

- Node.js v12 or higher
- MongoDB

## Installation

1. **Clone Repository**

```bash
git clone <repository-url>
cd <repository-directory>
2. Install Dependencies
npm install
3.Environment Configuration
Create a .env file in the root directory of the project and add the following environment variables:
MONGODB_URI=mongodb://username:password@localhost:27017/database_name
JWT_SECRET=your_secret_key
PORT=3000
Replace username, password, localhost, and database_name with your actual information.
Replace your_secret_key with a secret value you want to use for JWT.
4.Usage 
npm start
==================
API Endpoints
1. Generate Token
Endpoint: /api/generate-token
Method: POST
Request Body:
{
  "userId": "12345"
}
Response:
{
  "token": "YOUR_JWT_TOKEN"
}
2.Update Score
Endpoint: /api/update-score
Method: POST
Headers:
Authorization: Bearer YOUR_JWT_TOKEN
Request Body:
{
  "userId": "12345",
  "score": 10
}
Response:
{
  "message": "Score updated successfully"
}

