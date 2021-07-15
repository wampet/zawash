const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    numberplate: {
      type: String,
      trim: true,
    },
    colorvehicle: {
      type: String,
      trim: true,
    },       
    dateIn: {
        type: Date
       
    },
    datetimeArrival: {
      type: Date
      
    },
    package: {
        type: String,
        trim: true,
    },
    washer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WasherRegister',
    },
    packagePrice: {
      type: Number,
    },
    washerFee: {
      type: Number,
    },
      make: {
        type: String,
        trim: true
    }
  });

module.exports = mongoose.model('VehicleRegister', vehicleSchema);
