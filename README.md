# MERN Stack Blog Platform

A full-stack blog platform built with MongoDB, Express.js, React, and Node.js featuring JWT authentication, Markdown support, and CRUD operations.

## Features

- **User Authentication**: JWT-based registration and login
- **Blog Management**: Create, read, update, and delete blog posts
- **Markdown Editor**: Rich text editing with SimpleMDE
- **Protected Routes**: Secure user-specific content
- **Responsive Design**: Modern and clean UI
- **Draft/Publish System**: Save drafts or publish posts immediately
- **Tagging System**: Organize posts with tags

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- express-validator for input validation

### Frontend
- React 18 with Hooks
- React Router for navigation
- Axios for API calls
- SimpleMDE for Markdown editing
- React Markdown for rendering

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Backend Setup

1. **Install backend dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Update the `.env` file with your configuration:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-blog
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=development
   ```

3. **Start MongoDB:**
   - For local MongoDB: `mongod`
   - For MongoDB Atlas: Use your connection string in MONGODB_URI

### Frontend Setup

1. **Navigate to client directory and install dependencies:**
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   npm run dev
   ```

2. **Start the frontend (in a new terminal):**
   ```bash
   npm run client
   ```

3. **Run both concurrently:**
   ```bash
   # Install concurrently first
   npm install -g concurrently
   
   # Then run both
   npm run dev & npm run client
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth` - Login user
- `GET /api/auth` - Get current user (protected)

### Posts
- `GET /api/posts` - Get all published posts
- `GET /api/posts/my` - Get current user's posts (protected)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (protected)
- `PUT /api/posts/:id` - Update post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)

## Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Create Posts**: Use the Markdown editor to write and format your posts
3. **Manage Posts**: View, edit, or delete your posts from the dashboard
4. **Browse Posts**: Public users can read all published posts
5. **Draft System**: Save posts as drafts or publish them immediately

## Project Structure

```
mern-blog/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React context (Auth)
│   │   ├── pages/          # Page components
│   │   └── ...
│   └── package.json
├── middleware/             # Express middleware
├── models/                 # Mongoose models
├── routes/                 # API routes
├── .env                    # Environment variables
├── server.js              # Express server
└── package.json           # Backend dependencies
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- User authorization for post management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
