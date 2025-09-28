import CaptainModel from "../models/captain.model.js";
import { createCaptain } from "../service/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req , res , next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname , email , password, vehicle } = req.body;

    const isCaptaineExist = await CaptainModel.findOne({ email });
    if (isCaptaineExist) {
        return res.status(400).json({ message: "Captain with this email already exists" });
    }

    console.log(req.body);

    const hashpassword = await CaptainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname , email , password: hashpassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ captain , token });
}