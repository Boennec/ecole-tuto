const router = require('express').Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation') ;
const bcrypt = require ('bcryptjs')

//validation
const Joi = require('joi');
const user = require('../model/user');



router.post('/register', async (req, res) => {

    //let's validate the data before we make a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status (400).send('Email already exists');


    //Hash the password
    const salt = await bcrypt.gentsalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
     const user = new User({
        name: req.body.name,
        email:req.body.email,
        passsword: hashedpassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    } 
});

    //login
    router.post('/login', async (req,res) => {
    //let's validate the data before we make a user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //checking if the email exists
    const emailExist = await User.findOne({email: req.body.email});
    if(!User) return res.status (400).send('Email not found');
    //password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('invalid password')

        //create and assign a token
        const token = jwt.sign({ _id: user._id}, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send(token);
        
    res.send('logged in!');

});


module.exports = router;

