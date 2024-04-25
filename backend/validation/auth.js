import {body} from 'express-validator'

export const registerValidator = [
    body('email').isEmail(),
    body('fullName').isLength({min: 6}),
    body('password').isLength({min: 6}),
]