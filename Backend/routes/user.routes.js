const express = require('express');
const router = express.Router();
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')

router.post('/register',[
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email invalid'),
    body('password').isLength({min:6}).withMessage('Password must be 6 characters long')
],userController.registerUser)


router.post('/login',[body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
    ],userController.loginUser)


module.exports=router;