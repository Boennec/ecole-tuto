const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import routes
const authRoute = require('./routes/auth');


dotenv.config();


//connect to db
/* mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
console.log('connected to db')); */



mongoose.connect('mongodb://localhost:27017/ecole-tuto', { useNewUrlParser: true }, () => 
console.log('connected to db'));


//middlewares
app.use(express.json());


//route Middlewares
app.use('/user', authRoute);

app.listen(3000, () => console.log('server up and running'));


