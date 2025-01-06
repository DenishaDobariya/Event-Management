# Event Management System
## Overview
- The Event Management System is a web-based application designed to simplify the process of organizing and managing events. The system allows users to create, view, edit, and delete events. It is intended for event organizers to efficiently manage their event-related tasks in a single platform.

## Features
**User Registration and Authentication**

- Users can register and log in to the system securely.
- Only registered users can create and manage events.

**Event Management**

- Create events by providing details such as event name, date, location, description...
- View a list of all upcoming events.
- Edit or update event information.
- Delete events when necessary.

## Tech Stack
- Frontend: React, Redux
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Token (JWT)
- HTTP Client: Axios

## Installation and Setup
**1. Clone the Repository and go to directory**

     cd Event-Management

**2. Set up backend server**

- Navigate to backend direcory

       cd backend
- Install dependencies

       npm install

- create .env file

      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
  
- start the server

      npm start

**3. Set up frontend server**

- Navigate to frontend direcory

       cd backend
  
- Install dependencies

       npm install

- start the server

      npm start

