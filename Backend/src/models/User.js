const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    socialAccounts: {
        linkedin: { type: String },
        youtube: { type: String },
        twitter: { type: String },
        instagram: { type: String }
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}
const User = mongoose.model('User', userSchema);
module.exports = User;
