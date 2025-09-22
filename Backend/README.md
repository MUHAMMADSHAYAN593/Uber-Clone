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