import express from "express";
import { body } from "express-validator";
import { registerCaptain } from "../controllers/captain.controller.js";

const router = express.Router();

router.post(
    "/register",[
        body("email").isEmail().withMessage("Name is required"),
        body("fullname.firstname").isLength({ min: 3}).withMessage("First name must be at least 3 characters long"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
        body("vehicle.color").not().isEmpty().withMessage("Vehicle is required"),
        body("vehicle.plate").not().isEmpty().withMessage("Vehicle plate is required"),
        body("vehicle.capacity").not().isEmpty().withMessage("Vehicle model is required"),
        body("vehicle.vehicleType").not().isEmpty().withMessage("Vehicle model is required"),
    ],
    registerCaptain
)

export default router;