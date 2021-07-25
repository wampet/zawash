const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    item: {
      type: String,
      trim: true,
      required: "Please provide item",
    },
    amount: {
      type: Number,
      required: "Please provide amount",
    },
    doe: {
      type: Date,
      required: "Please provide doe"
    },
  });

module.exports = mongoose.model('ExpenseTrack', expenseSchema);
//Finally, we export our mongoose model variable so that it can be imported and used in other files.