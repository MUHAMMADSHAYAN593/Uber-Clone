import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            firstname: {
                type: String,
                required: true,
                minlength: [3, "Name must be at least 3 characters long"]
            },
            lastname: {
                type: String,
                minlength: [3, "Name must be at least 3 characters long"]
            }
        },
        email: { type: String, required: true, unique: true , minlength: [10, "Email must be at least 10 characters long"]},
        password: { type: String, required: true , select: false},

        socketID: { type: String },
    }
)


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const User = mongoose.model('User', userSchema);
export default User;