# Habit Tracker Portal - Setup Guide

## Project Overview

The Habit Tracker Portal is a comprehensive full-stack application that allows users to track their daily habits, monitor progress, and achieve their goals. It features a modern React frontend, Node.js/Express backend, MongoDB database, JWT authentication, dark mode support, and comprehensive testing.

## Technology Stack

- **Frontend**: React 18+, TypeScript, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt
- **Testing**: Jest, React Testing Library, Supertest
- **DevOps**: GitHub Actions CI/CD, Docker (optional)
- **Code Quality**: ESLint, Prettier

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas account)
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Im044/habit-tracker-portal.git
cd habit-tracker-portal
```

### 2. Install Dependencies

**For the entire project:**

```bash
npm run install-all
```

**Or install separately:**

```bash
# Root dependencies
npm install

# Client dependencies
cd client && npm install && cd ..

# Server dependencies
cd server && npm install && cd ..
```

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.example .env
```

Edit `.env` and add your configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/habit-tracker
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

### 4. Start MongoDB

**Local MongoDB:**

```bash
mongod
```

**MongoDB Atlas:**

Use the connection string from MongoDB Atlas in your `.env` file.

## Running the Application

### Development Mode

Run both frontend and backend concurrently:

```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Mode

```bash
npm run build
npm start
```

## Testing

### Run All Tests

```bash
npm test
```

### Run Tests with Coverage

```bash
# Client tests
cd client && npm test -- --coverage

# Server tests
cd server && npm test -- --coverage
```

### Run Specific Test Suites

```bash
# Frontend tests
npm run test:client

# Backend tests
npm run test:server
```

## Linting and Code Quality

### Run ESLint

```bash
npm run lint
```

### Fix Linting Issues

```bash
cd client && npm run lint --fix
cd server && npm run lint --fix
```

## Project Structure

```
habit-tracker-portal/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # Context API
│   │   ├── utils/         # Utility functions
│   │   ├── styles/        # CSS files
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
├── server/                 # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── middleware/        # Express middleware
│   ├── services/          # Business logic
│   ├── utils/             # Helper functions
│   ├── tests/             # Test files
│   ├── index.js
│   ├── package.json
│   └── .env
├── package.json
├── README.md
├── SETUP.md
└── LICENSE
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Habits
- `GET /api/habits` - Get all habits
- `POST /api/habits` - Create a new habit
- `GET /api/habits/:id` - Get habit details
- `PUT /api/habits/:id` - Update habit
- `DELETE /api/habits/:id` - Delete habit

### Tracking
- `POST /api/habits/:habitId/track` - Log habit completion
- `GET /api/habits/:habitId/progress` - Get progress data
- `GET /api/dashboard` - Get dashboard overview

## Features

- ✅ User Authentication (JWT)
- ✅ Create, Read, Update, Delete Habits
- ✅ Daily Habit Tracking
- ✅ Monthly Progress Charts
- ✅ Goal Setting and Tracking
- ✅ Dark Mode Support
- ✅ Responsive Design
- ✅ Comprehensive Test Coverage
- ✅ Error Handling
- ✅ Form Validation

## Deployment

### Deploy to Heroku

```bash
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set JWT_SECRET=your_secret
heroku config:set MONGODB_URI=your_mongodb_uri

# Deploy
git push heroku main
```

### Deploy to Vercel (Frontend) & Railway (Backend)

Follow the respective deployment guides for Vercel and Railway.

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify network access (if using MongoDB Atlas)

### Port Already in Use
```bash
# Change port in .env
PORT=5001
```

### Dependencies Installation Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub.
