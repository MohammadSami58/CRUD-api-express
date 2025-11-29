  API Documentation – User CRUD API (Express + MongoDB)
  1. Overview
  
  This API provides basic CRUD (Create, Read, Update, Delete) operations for managing User data stored in a MongoDB database using an Express.js server.
  
  Base URL (local development):
  
  http://localhost:3000
  
  2. Technologies Used
  
  Node.js
  
  Express.js
  
  MongoDB Atlas
  
  Mongoose
  
  3. User Model
  
  Each user document contains the following fields:
  
  Field	Type	Description
  name	String	Name of the user
  email	String	User’s email address
  age	Number	Age of the user
  address	String	Physical address
  4. Endpoints
  1. Create User
  
  POST /users
  
  Description: Creates a new user.
  
  Request Body Example:
  
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "address": "New York"
  }
  
  
  Response Example:
  
  {
    "_id": "67214a0e39d2c0f4b93757e1",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "address": "New York",
    "__v": 0
  }
  
  2. Get All Users
  
  GET /users
  
  Description: Returns a list of all users.
  
  Response Example:
  
  [
    {
      "_id": "67214a0e39d2c0f4b93757e1",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 25,
      "address": "New York"
    }
  ]
  
  3. Get Single User
  
  GET /users/:id
  
  Description: Returns a single user by ID.
  
  Success Example:
  
  {
    "_id": "67214a0e39d2c0f4b93757e1",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "address": "New York"
  }
  
  
  If user not found:
  
  {
    "message": "User not found"
  }
  
  4. Update User
  
  PUT /users/:id
  
  Description: Updates an existing user's information.
  
  Request Body Example:
  
  {
    "age": 30
  }
  
  
  Success Example:
  
  {
    "_id": "67214a0e39d2c0f4b93757e1",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "address": "New York"
  }
  
  
  If user not found:
  
  {
    "message": "User not found"
  }
  
  5. Delete User
  
  DELETE /users/:id
  
  Description: Deletes a user by ID.
  
  Success Response:
  
  {
    "message": "Deleted successfully"
  }
  
  
  If user not found:
  
  {
    "message": "User not found"
  }
  
  5. How to Run
  
  Install dependencies:
  
  npm install
  
  
  Run the server:
  
  node index.js
  
  
  (or your file name)
  
  Server runs at:
  
  http://localhost:3000
  
  6. Notes
  
  All endpoints accept and return JSON.
  
  MongoDB connection is established using Mongoose.
  
  Error handling is kept minimal for demonstration purposes.
  
  If you want, I can convert this to PDF, Markdown, or a Swagger/OpenAPI format.
  
  You said:
  no just give that part what i need to submit so i can copy paste
  ChatGPT said:
  
  Here is exactly the part you need to submit — clean, simple, and ready to copy-paste.
  
  📘 API Documentation – User CRUD API
  Overview
  
  This API allows creating, reading, updating, and deleting users using an Express.js server and a MongoDB database.
  
  Base URL:
  
  http://localhost:3000
  
  User Model
  
  Each user contains:
  
  name: String
  
  email: String
  
  age: Number
  
  address: String
  
  Endpoints
  1. Create User
  
  POST /users
  
  Request Body Example:
  
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "address": "New York"
  }
  
  
  Response: Returns the created user.
  
  2. Get All Users
  
  GET /users
  
  Response: Returns an array of all users.
  
  3. Get Single User
  
  GET /users/:id
  
  Response: Returns the user with the given ID.
  If not found:
  
  { "message": "User not found" }
  
  4. Update User
  
  PUT /users/:id
  
  Request Body: Fields to update.
  
  Response: Returns the updated user.
  If not found:
  
  { "message": "User not found" }
  
  5. Delete User
  
  DELETE /users/:id
  
  Response:
  
  { "message": "Deleted successfully" }
  
  
  If not found:
  
  { "message": "User not found" }
  
  How to Run
  
  Install dependencies:
  
  npm install
  
  
  Start the server:
  
  node index.js
  
  
  Server runs at:
  
  http://localhost:3000
