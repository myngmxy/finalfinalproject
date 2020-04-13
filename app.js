const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

require('dotenv').config
// const port = process.env.PORT || 5000;

app.use(cookieParser());
// app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://timonnx:changkyun260196@cluster0-zzl03.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, () => {
    console.log('successfully connected to database');
});


const userRouter = require('./routes/User');
app.use('/user',userRouter); 

app.listen(5000,() => { 
    console.log('express server started');
})
const connection = mongoose.connection;
 
