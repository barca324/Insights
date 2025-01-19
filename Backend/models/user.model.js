const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
       
    },
    password: {
        type: String,
        required: true,
        min: 6,
       
    },
    
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;

