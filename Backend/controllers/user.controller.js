const userModel = require('../models/user.model');
const userService=require('../services/user.service')
const {validationResult}=require('express-validator')
const bcrypt=require('bcrypt')

module.exports.registerUser=async(req,res,next)=>{
  try{
    console.log('Request Body:', req.body); // Debug log

    // Validation of request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    const find=await userModel.findOne({email});
    if(find){
        return res.status(400).send('User already exists');
    }

   
    const hashedPassword = await bcrypt.hash(password,10);
    console.log('Hashed Password:', hashedPassword);  

    
    const user = await userService.createUser(name, email, hashedPassword);
    console.log('User created:', user); 
    if (!user) {
        return res.status(400).send('User could not be created');
    }

    
    const token = await user.generateAuthToken();
    console.log('Generated Token:', token);  
    if (!token) {
        return res.status(400).send('Token generation failed');
    }

   
   return  res.status(201).send({ user, token });
} catch (error) {
    console.error('Error registering user:', error);
   return  res.status(500).send('Internal Server Error');
}
  
 

}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body)
    const { email, password } = req.body;
    console.log(password);
    
    try {
        const user = await userModel.findOne({ email })
  
        if (!user) {
            return res.status(400).send('User not found');
        }
        console.log('found user',user);
        console.log('Stored Password:', user.password); 
        console.log('Attempted Password:', password); 
  
     
        
          const isMatch=await bcrypt.compare(password,user.password);
          console.log(isMatch)
          if(!isMatch){
              return res.status(401).send('Invalid password');
          }
          const token=user.generateAuthToken();
          res.cookie('token',token);
  
          return res.status(200).send({user,token});
  
       
    } catch (error) {
        console.error('Error logging in user:', error);
        return res.status(500).send('Internal Server Error');
    }
  };