import {body, validationResult} from 'express-validator';

function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export const validateRegisterUser =[
    body("email")
    .isEmail()
    .withMessage("Please enter a valid email address"),

    body("password")
    .isLength({min:6})
    .withMessage("Password must be at least 6 characters long"),

    body("contact")
    .notEmpty().withMessage("Contact number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Please enter a valid 10-digit contact number"),

    body("fullName")
    .notEmpty().withMessage("Full name is required")
    .isLength({min:2})
    .withMessage("Full name must be at least 2 characters long"),

    body("isSeller")
    .isBoolean()
    .withMessage("isSeller must be a boolean value"),

    validateRequest
]