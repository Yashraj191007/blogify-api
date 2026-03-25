# Backend NEW

A Node.js backend application built with Express.js.

## Project Structure

```
Backend NEW
├── .gitignore
├── node_modules/
├── package-lock.json
├── package.json
├── README.md
└── src/
    ├── controllers/    # Route controllers
    ├── routes/         # API routes
    ├── services/       # Business logic
    ├── utils/          # Utility functions
    └── index.js        # Main application entry point
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Tejas-V-P/Blogify-api1.git
cd Backend\ NEW
```

2. Install dependencies
```bash
npm install
```

3. Install Express (if not already installed)
```bash
npm install express
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

- `GET /` - Health check endpoint

## Development

This project uses:
- **Express.js** - Web framework
- **Nodemon** - Development server with auto-restart

## License

ISC