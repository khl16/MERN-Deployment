const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [ true, "Pet name is required" ],
    minLength: [ 3, "Pet name must be at least 3 characters long" ],
    unique: true,
    uniqueCaseInsensitive: true
  },
  type: {
    type: String,
    require: [ true, "Pet type is required" ],
    minLength: [ 3, "Pet type must be at least 3 characters long" ]
  },
  description: {
    type: String,
    require: [ true, "Pet description is required" ],
    minLength: [ 3, "Pet description must be at least 3 characters long" ]
  },
  skill1: {
    type: String
  },
  skill2: {
    type: String
  },
  skill3: {
    type: String
  }
},{ timestamps: true });

PetSchema.plugin(uniqueValidator, {
  type: 'mongoose-unique-validator',
  message: 'Pet {PATH} must be unique'
  });

module.exports = mongoose.model('Pet', PetSchema);