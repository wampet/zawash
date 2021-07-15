const mongoose = require('mongoose');

const washerRegSchema = new mongoose.Schema({
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
        type: String,
        trim: true,
      },
    dateofbirth: {
      type: Date,
      
    },
    address: {
        type: String,
        trim: true,
      },
   zawashid: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    tel: {
        type: String,
        trim: true,
    },
    nationalid: {
        type: String,
        trim: true
    }
    
  });

module.exports = mongoose.model('WasherRegister', washerRegSchema);