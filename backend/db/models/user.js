const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema ({
   firstName :  { type: String, trim: true, required: true, },
   lastName :  { type: String, trim: true, required: true, },
   email :  { type: String, required: true, trim: true, unique: true, },
   password :  { type: String, required: true, trim: true },
   goals : [ {type: Schema.Types.ObjectId, ref: 'goals'} ]
} );

module.exports = mongoose.model('user', user);