const mongoose = require('mongoose');

const washerRegSchema = new mongoose.Schema({
    fullname: {
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
//Finally, we export our mongoose model so that it can be imported and used in other files.