import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export const authUser = async (req, res, next) => {
    let token;
    
    // console.log('Auth Headers:', req.headers.authorization);
    
    // Check for token in cookies
    if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
        // console.log('Token from cookies:', token);
    }
    
    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.toLowerCase().startsWith('bearer')) {
        token = req.headers.authorization.split(' ')[1];
        // console.log('Token from Authorization header:', token);
    }

    if (!token) {
        // console.log('No token found in request');
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const blacklistedToken = await blacklistTokenModel.findOne({ token }); 
    if (blacklistedToken) {
        return res.status(401).json({ message: 'Token has been revoked. Please log in again.' });
    }  

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded._id);

        req.user = user;
        return next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }

}