var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let EleveSchema = new Schema ({
    make: String,
    model: String,
    owner:{
        type: Schema.Types.ObjectId,
        ref:"classe"
    }
})