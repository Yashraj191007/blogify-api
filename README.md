# Blogify API

A production-ready RESTful API for the Blogify blogging platform, built with Node.js, Express.js, and MongoDB (Mongoose).

## 🚀 Live Deployment

This API is deployed on **Render**: [https://blogify-api-yashraj.onrender.com](https://blogify-api-yashraj.onrender.com)

## Project Structure

```
blogify-api/
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── config/
    │   └── db.js           # MongoDB connection
    ├── controllers/        # Route controllers (thin layer)
    ├── middleware/         # Auth, logging, error handling
    ├── models/             # Mongoose schemas (User, Post)
    ├── routes/             # API route definitions
    ├── services/           # Business logic & DB queries
    └── index.js            # Main application entry point
```

## Getting Started

### Prerequisites
- Node.js (v22 or higher)
- npm
- MongoDB Atlas account

### Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
PORT=3000
```

> ⚠️ **Never commit your `.env` file.** It is listed in `.gitignore`.

### Installation

1. Clone the repository
```bash
git clone https://github.com/Tejas-V-P/Blogify-api1.git
cd Blogify-api1
```

2. Install dependencies
```bash
npm install
```

### Running the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Health check | No |
| POST | `/api/v1/users/register` | Register a new user | No |
| POST | `/api/v1/users/login` | Login and get JWT cookie | No |
| POST | `/api/v1/users/logout` | Logout (clears cookie) | Yes |
| GET | `/api/v1/posts` | Get all posts | No |
| POST | `/api/v1/posts` | Create a new post | Yes |
| GET | `/api/v1/posts/:id` | Get a single post | No |
| PUT | `/api/v1/posts/:id` | Update a post (owner only) | Yes |
| DELETE | `/api/v1/posts/:id` | Delete a post (owner only) | Yes |

## Deployment (Render)

This API is configured for deployment on [Render](https://render.com).

| Setting | Value |
|---------|-------|
| Build Command | `npm install` |
| Start Command | `npm start` |
| Node Version | `>=22.0.0` (set via `engines` in `package.json`) |

**Required Environment Variables on Render:**
- `MONGO_URI` — MongoDB Atlas connection string
- `JWT_SECRET` — Secret key for signing JWTs
- `NODE_ENV` — Set to `production`

## Tech Stack

- **Runtime**: Node.js v22
- **Framework**: Express.js v5
- **Database**: MongoDB with Mongoose v9
- **Auth**: JWT (jsonwebtoken) + bcryptjs
- **Validation**: express-validator
- **Dev Tool**: Nodemon

## License

ISC