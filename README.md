# E-Commerce Application Backend

## Overview
This is the backend for an e-commerce application built using the MERN stack. The backend is responsible for handling user authentication, product management, order processing, and other business logic.

## Technologies Used
* Node.js: Runtime environment for executing JavaScript on the server.
* Express.js: Web framework for building RESTful APIs.
* MongoDB: database for storing application data.
* Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
* JWT (JSON Web Tokens): For user authentication and authorization.
* bcrypt: For hashing passwords.
* dotenv: For managing environment variables.
  
## Features
* User authentication and authorization (register, login, logout, password reset)
* Product management (CRUD operations)
* Order management (CRUD operations)

## Getting Started
* Clone the repository: git clone https://github.com/Kishoiyan-Charity1/SHOPTIT
* Install dependencies: npm install or yarn install
* Create a .env file in the root directory and add the following environment variables:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SMTP_HOST=smtp.mailtrap.io
   SMTP_PORT=2525
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password

  ## Run Application
  npm run dev // yarn dev


