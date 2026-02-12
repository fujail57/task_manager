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

## Tech Stack

### Client

- React.js (Vite)
- Axios
- React Query (TanStack) for efficient data fetching and caching
- Tailwind CSS

### Server

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt
- Cors
- MVC Architecture

## Installation

### Prerequisites

- Node.js **version 20 or later**
- MongoDB (local or cloud)
- Add .env file in server directory

```bash
    JWT_SECRET = 123456 || secret
    MONGO_URL= mongo-db url
    PORT=3000
```

### Setup Commands

```bash
# Clone the repository
git clone <repository-url>

# Client setup
cd client
npm install
npm run dev

# Server setup
cd server
npm install
npm run dev
```

`

## 📬 API Documentation

- [Postman Api Collection](https://www.postman.com/material-pilot-96055036/primetrade/collection/39364556-678197b7-800d-4afc-b902-8291d20592f2)
