const userModel = require('../models/user.model');

module.exports.createUser=async(
    name,
    email,
    password
)=>{
    try{
        const user = new userModel({ name, email, password});

        
        await user.save();
        
       
        return user;
    }
    catch(error)
    {
        console.error('Error in service:', error);
        throw error;
    }
}