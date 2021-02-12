/*  connexion au serveur*/
const express = require('express');
const app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


//connexion a la bdd
var db = require('./db.js');
mongoose.connect(db.url);


//routes
var routeEleves = require('./routes/eleve.js');
app.use('/eleves', routeEleves);


app.get('/', (req, res) => { res.send('hello'); });



app.listen(3000, () => console.log('en ecoute'));