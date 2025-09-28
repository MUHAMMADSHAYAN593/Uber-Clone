import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import e from "express";
import CaptainModel from "../models/captain.model.js";

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

export const authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // First verify the token to avoid unnecessary database query if token is invalid
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        // Run these queries in parallel
        const [blacklistedToken, captain] = await Promise.all([
            blacklistTokenModel.findOne({ token }).select('_id').lean(),
            CaptainModel.findById(decoded._id).lean()
        ]);

        if (blacklistedToken) {
            return res.status(401).json({ message: 'Token has been revoked. Please log in again.' });
        }

        if (!captain) {
            return res.status(401).json({ message: 'Captain not found.' });
        }

        req.captain = captain;
        next();
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(401).json({ message: 'Invalid token.' });
    }
}