import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "Name must be at least 3 characters long"]
        },
        lastname: {
            type: String,
            minlength: [3, "Name must be at least 3 characters long"]
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, "Email must be at least 10 characters long"], lowercase: true
    },
    password: { type: String, required: true, select: false },

    socketId: { type: String },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    
    vehicle: {
        color: { type: String, required: true },
        plate: { type: String, required: true },
        capacity: { type: Number, required: true , min:[1, "Capacity must be at least 1"]},
        vehicleType: { type: String, enum: ['car' , 'motorcycle' , 'auto'] ,required: true}
    },

    location: {
        lat: { type: Number },
        lng: { type: Number }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const CaptainModel = mongoose.model('Captain', captainSchema);


export default CaptainModel;


