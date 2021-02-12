var mongoose = require('mongoose');

module.exports = mongoose.model('classe', {
    nom: {type: String, default: ''},
    eleves : [{Eleve: mongoose.ObjectId}]
});