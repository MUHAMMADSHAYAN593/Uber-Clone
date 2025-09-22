import User from "../models/user.model.js";
import { createuser } from "../service/user.service.js";
import { validationResult } from "express-validator";

export const registerUser = async (req , res , next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname , email , password } = req.body;

    console.log(req.body);

    const hashpassword = await User.hashPassword(password);

    const user = await createuser({
        firstname: fullname.firstname,
        lastname: fullname.lastname , email , password: hashpassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({ user , token });


}