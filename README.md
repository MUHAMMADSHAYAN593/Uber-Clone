# Uber Clone

A ride-sharing application that replicates core Uber functionality. Book rides, track drivers, and manage payments securely.

## Features

- 🚗 **Ride Booking** - Request rides easily
- 📍 **Location Services** - Google Maps integration
- 💳 **Payment Processing** - Multiple payment methods
- 👥 **Driver Matching** - Smart driver assignment
- ⭐ **Ratings & Reviews** - Rate drivers and rides
- 📱 **Real-time Tracking** - Track your driver
- 💬 **In-app Chat** - Message driver
- 🗺️ **Route Optimization** - Efficient routing
- 🔐 **Safety Features** - Emergency SOS
- 📊 **Ride History** - Track past rides

## Tech Stack

### Frontend
- React
- Google Maps API
- Tailwind CSS
- Redux

### Backend
- Node.js
- Express
- MongoDB
- Socket.io
- Stripe

## Installation

### Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env`:
```env
REACT_APP_GOOGLE_MAPS_API=your_key
REACT_APP_API_URL=http://localhost:5000
```

Start:
```bash
npm start
```

### Backend Setup

```bash
cd Backend
npm install
```

Create `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/uber-clone
GOOGLE_MAPS_API_KEY=your_key
STRIPE_SECRET_KEY=your_key
JWT_SECRET=your_secret
```

Start:
```bash
npm start
```

## Project Structure

```
Uber-Clone/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
├── Backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
└── README.md
```

## Key Features

### For Passengers
- Request rides
- Set pickup/dropoff
- Real-time driver tracking
- Estimated price
- Payment options
- Rate driver
- Emergency support

### For Drivers
- Accept ride requests
- Navigate using maps
- Track earnings
- Rate passengers
- Schedule rides
- View ride history

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get profile

### Rides
- `POST /api/rides/request` - Request ride
- `GET /api/rides/active` - Get active ride
- `POST /api/rides/:id/complete` - Complete ride
- `GET /api/rides/history` - Ride history

### Drivers
- `GET /api/drivers/nearby` - Find nearby drivers
- `POST /api/drivers/accept` - Accept ride
- `GET /api/drivers/earnings` - View earnings

### Payments
- `POST /api/payments/method` - Add payment method
- `POST /api/payments/charge` - Process payment
- `GET /api/payments/history` - Payment history

## Database Models

- Users (passengers)
- Drivers
- Rides
- Payments
- Ratings
- Vehicles
- Locations

## Real-time Features

Using Socket.io:
- Live driver location
- Ride status updates
- In-app notifications
- Chat messaging
- Connection status

## Security

- JWT authentication
- Encrypted passwords
- Secure payments (Stripe)
- HTTPS enforced
- Input validation
- Rate limiting

## Usage

### Book a Ride

1. Open app
2. Enter pickup location
3. Enter destination
4. Select ride type
5. Confirm booking
6. Wait for driver

### As a Driver

1. Sign up as driver
2. Complete verification
3. Go online
4. Accept rides
5. Navigate to passenger
6. Complete ride

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push branch
5. Open Pull Request

## Future Improvements

- [ ] Add scheduled rides
- [ ] Implement carpool
- [ ] Add insurance
- [ ] Create loyalty program
- [ ] Add subscription plans

## License

MIT License