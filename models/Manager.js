const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const managerSchema = new mongoose.Schema({
    fullname: {
      type: String,
      trim: true,
      required: "Please provide full name",
    },
    contact: {
      type: String,
      required: "Please provide contact",
      trim: true,
    },email: {
      type: String,
      required: "Please provide email",
      trim: true,
    },
    username: {
        type: String,
        required: "Please provide username",
        unique: true,
        trim: true,
      },
    password: {
        type: String
          },

  });

managerSchema.plugin(passportLocalMongoose);
  // managerSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
module.exports = mongoose.model('Manager', managerSchema);
//Finally, we export our mongoose model variable so that it can be imported and used in other files.