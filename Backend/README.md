# Uber Clone Backend API Documentation

## Authentication Endpoints

### Register User
Register a new user in the system.

**Endpoint:** `POST /users/register`

**Request Body:**
```json
{
    "fullname": {
        "firstname": "string", // Required, minimum 3 characters
        "lastname": "string"   // Optional, minimum 3 characters if provided
    },
    "email": "string",    // Required, valid email format, minimum 10 characters
    "password": "string"  // Required, minimum 6 characters
}
```

**Example Request:**
```json
{
    "fullname": {
        "firstname": "Shayan",
        "lastname": "akhlaq"
    },
    "email": "shayan@gmail.com",
    "password": "password123"
}
```

**Success Response:**
- **Status Code:** 201 (Created)
- **Response Body:**
```json
{
    "user": {
        "fullname": {
            "firstname": "Shayan",
            "lastname": "akhlaq"
        },
        "email": "shayan@gmail.com",
        "_id": "generated-user-id",
        // other user fields (password will be excluded)
    },
    "token": "JWT_TOKEN"
}
```

**Error Responses:**

1. Validation Errors (Status Code: 400)
```json
{
    "errors": [
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Name is required",
            "param": "email",
            "location": "body"
        }
    ]
}
```

2. Missing Required Fields (Status Code: 400)
```json
{
    "error": "All fields are required"
}
```

**Validation Rules:**
- `firstname`: Required, minimum 3 characters
- `lastname`: Optional, minimum 3 characters if provided
- `email`: Required, must be a valid email format, minimum 10 characters
- `password`: Required, minimum 6 characters
- Email must be unique in the system

**Security Features:**
- Password is hashed using bcrypt before storage
- JWT token is generated and returned upon successful registration
- Token expires in 7 days

### Login User
Authenticate an existing user and receive an access token.

**Endpoint:** `POST /users/login`

**Request Body:**
```json
{
    "email": "string",    // Required, valid email format
    "password": "string"  // Required, minimum 6 characters
}
```

**Example Request:**
```json
{
    "email": "shayan@gmail.com",
    "password": "password123"
}
```

**Success Response:**
- **Status Code:** 200 (OK)
- **Response Body:**
```json
{
    "user": {
        "fullname": {
            "firstname": "Shayan",
            "lastname": "akhlaq"
        },
        "email": "shayan@gmail.com",
        "_id": "user-id",
        // other user fields (password will be excluded)
    },
    "token": "JWT_TOKEN"
}
```

**Error Responses:**

1. Invalid Credentials (Status Code: 401)
```json
{
    "message": "Invalid email or password"
}
```

2. Validation Errors (Status Code: 400)
```json
{
    "errors": [
        {
            "msg": "Name is required",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

**Validation Rules:**
- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters

**Security Features:**
- Passwords are compared using secure bcrypt comparison
- JWT token is generated and returned upon successful login
- Token expires in 7 days
- Password is not included in the response
- Uses consistent timing for password comparison to prevent timing attacks

### Get User Profile
Get the profile information of the authenticated user.

**Endpoint:** `GET /users/profile`

**Authentication Required:** Yes (Bearer Token)

**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Success Response:**
- **Status Code:** 200 (OK)
- **Response Body:**
```json
{
    "user": {
        "fullname": {
            "firstname": "Shayan",
            "lastname": "akhlaq"
        },
        "email": "shayan@gmail.com",
        "_id": "user-id"
        // other user fields (password excluded)
    }
}
```

**Error Responses:**

1. No Token Provided (Status Code: 401)
```json
{
    "message": "Access denied. No token provided."
}
```

2. Invalid Token (Status Code: 400)
```json
{
    "message": "Invalid token."
}
```

### Logout User
Logout the currently authenticated user and invalidate their token.

**Endpoint:** `POST /users/logout`

**Authentication Required:** Yes (Bearer Token)

**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Success Response:**
- **Status Code:** 200 (OK)
- **Response Body:**
```json
{
    "message": "Logged out successfully"
}
```

**Error Responses:**

1. No Token Provided (Status Code: 401)
```json
{
    "message": "Access denied. No token provided."
}
```

2. Invalid Token (Status Code: 400)
```json
{
    "message": "Invalid token."
}
```

**Security Features:**
- Requires valid JWT token for authentication
- Blacklists the token upon logout to prevent reuse
- Clears authentication cookies if present