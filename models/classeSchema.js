var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ClasseSchema = new Schema({
    name: String,
    eleves:[{
        type:Schema.Types.ObjectId,
        ref:"eleve"
    }]
})

module.exports = mongoose.model("Classe", ClasseSchema);