# PrimeTradeTask

A task management application with user authentication and CRUD operations.

## Features

- **User Authentication**
    - Sign up and login functionality
    - JWT token-based authentication
    - Secure password hashing

- **Task Management**
    - Add new tasks
    - View tasks
    - Update existing tasks
    - Delete tasks

## Tech Stack

- Node.js , react.js , MongoDB , Tailwind CSS
- JWT for authentication
- Password hashing (bcrypt)
- Database: MongoDB

## Installation

```bash
npm install

```

## Environment Variables

Create a `.env` file:
```
JWT_SECRET = secrete
MONGO_URL= url
PORT=3000
```

## Usage

```bash
npm start
```

## API Endpoints

- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `GET /tasks` - View all tasks
- `POST /task` - Create task
- `PUT /tasks/:id` - Update task

