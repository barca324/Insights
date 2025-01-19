const express = require('express');
const app = express();
const dotenv = require('dotenv');
app.use(express.json());
const cors = require('cors');
const connectDB = require('./db/db');
connectDB();
const userRoutes=require('../Backend/routes/user.routes')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get('/', (req, res) => {
    res.send('Hello Worlds');
})
app.use('/users',userRoutes)

module.exports = app;