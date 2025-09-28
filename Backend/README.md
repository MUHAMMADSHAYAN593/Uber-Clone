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

## Captain Endpoints

### Register Captain
Register a new captain in the system.

**Endpoint:** `POST /captains/register`

**Request Body:**
```json
{
    "fullname": {
        "firstname": "string",    // Required, minimum 3 characters
        "lastname": "string"      // Optional, minimum 3 characters if provided
    },
    "email": "string",           // Required, valid email format, minimum 10 characters
    "password": "string",        // Required, minimum 6 characters
    "vehicle": {
        "color": "string",       // Required
        "plate": "string",       // Required
        "capacity": number,      // Required, minimum 1
        "vehicleType": "string"  // Required, must be one of: 'car', 'motorcycle', 'auto'
    }
}
```

**Example Request:**
```json
{
    "fullname": {
        "firstname": "Shayan_Captain",
        "lastname": "Shayan_Captain"
    },
    "email": "captain@gmail.com",
    "password": "password123",
    "vehicle": {
        "color": "red",
        "plate": "MP 04 XY 6234",
        "capacity": 3,
        "vehicleType": "car"
    }
}
```

**Success Response:**
- **Status Code:** 201 (Created)
- **Response Body:**
```json
{
    "captain": {
        "fullname": {
            "firstname": "Shayan_Captain",
            "lastname": "Shayan_Captain"
        },
        "email": "captain@gmail.com",
        "vehicle": {
            "color": "red",
            "plate": "MP 04 XY 6234",
            "capacity": 3,
            "vehicleType": "car"
        },
        "status": "inactive",
        "_id": "generated-captain-id"
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
            "msg": "Vehicle is required",
            "param": "vehicle.color",
            "location": "body"
        },
        {
            "msg": "Vehicle plate is required",
            "param": "vehicle.plate",
            "location": "body"
        },
        {
            "msg": "Vehicle model is required",
            "param": "vehicle.capacity",
            "location": "body"
        },
        {
            "msg": "Vehicle type must be car, motorcycle, or auto",
            "param": "vehicle.vehicleType",
            "location": "body"
        }
    ]
}
```

2. Captain Already Exists (Status Code: 400)
```json
{
    "message": "Captain with this email already exists"
}
```

**Validation Rules:**
- `firstname`: Required, minimum 3 characters
- `lastname`: Optional, minimum 3 characters if provided
- `email`: Required, must be a valid email format, minimum 10 characters
- `password`: Required, minimum 6 characters
- `vehicle.color`: Required
- `vehicle.plate`: Required
- `vehicle.capacity`: Required, must be at least 1
- `vehicle.vehicleType`: Required, must be one of: 'car', 'motorcycle', 'auto'
- Email must be unique in the system

**Additional Features:**
- Password is hashed using bcrypt before storage
- JWT token is generated and returned upon successful registration
- Token expires in 24 hours
- Initial status is set to 'inactive'
- Location tracking fields (lat/lng) are optional
- SocketId field available for real-time communication

### Login Captain
Authenticate an existing captain and receive an access token.

**Endpoint:** `POST /captains/login`

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
    "email": "captain@gmail.com",
    "password": "password123"
}
```

**Success Response:**
- **Status Code:** 200 (OK)
- **Response Body:**
```json
{
    "captain": {
        "fullname": {
            "firstname": "Shayan_Captain",
            "lastname": "Shayan_Captain"
        },
        "email": "captain@gmail.com",
        "vehicle": {
            "color": "red",
            "plate": "MP 04 XY 6234",
            "capacity": 3,
            "vehicleType": "car"
        },
        "status": "inactive",
        "_id": "captain-id"
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

### Get Captain Profile
Get the profile information of the authenticated captain.

**Endpoint:** `GET /captains/profile`

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
    "captain": {
        "fullname": {
            "firstname": "Shayan_Captain",
            "lastname": "Shayan_Captain"
        },
        "email": "captain@gmail.com",
        "vehicle": {
            "color": "red",
            "plate": "MP 04 XY 6234",
            "capacity": 3,
            "vehicleType": "car"
        },
        "status": "inactive",
        "_id": "captain-id",
        "location": {
            "lat": 123.456,
            "lng": 789.012
        }
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

2. Invalid Token (Status Code: 401)
```json
{
    "message": "Invalid token."
}
```

3. Captain Not Found (Status Code: 404)
```json
{
    "message": "Captain not found"
}
```

### Logout Captain
Logout the currently authenticated captain and invalidate their token.

**Endpoint:** `GET /captains/logout`

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

2. Invalid Token (Status Code: 401)
```json
{
    "message": "Invalid token."
}
```

**Security Features:**
- Requires valid JWT token for authentication
- Blacklists the token upon logout to prevent reuse
- Clears authentication cookies if present
- Token verification happens before database queries for better performance

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