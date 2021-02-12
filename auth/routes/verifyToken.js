const { func } = require('joi');
const jwt = require ('jsonwebtoken');

function auth (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('access denied');

    try{
        const verify = jwt.verify(token, process.env.TOKEN_SECRET)

    }catch(err){

    }
}