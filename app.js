const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
const dotenv=require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())


app.use(cookieParser());
app.use(fileupload()); 
//user api 
app.use('/api', require('./routes/User/UserRoute'))     //user route
app.use('/api', require('./routes/orderRoute'))         //order route
app.use('/api', require('./routes/StripePayment'))         //payment route
app.use('/api', require('./routes/Admin/productRoute'))     // product route

app.get("/", (req, res)=>{
    res.send("API is running...");
})

module.exports = app;