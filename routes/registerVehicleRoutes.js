const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const VehicleRegister = require('../models/VehicleRegister');
const WasherRegister = require('../models/WasherRegister');



washPackages = {
  smallcars: { washerFee: 3000, packagePrice: 10000 },
  medium: { washerFee: 4000, packagePrice: 15000 },
  fullwash: { washerFee: 5000, packagePrice: 20000 },
  bodaboda: { washerFee: 1500, packagePrice: 5000 },
  engine: { washerFee: 2000, packagePrice: 10000 }
}
router.get('/', async(req, res) => {
  let washerlist = await WasherRegister.find();
  res.render('registerVehicle', { washers:washerlist , title: "Register Vehicle", alert: req.query.alert })
})



router.post("/", async(req, res) => {
  try {
      
      let data = req.body
      let datetimeArrival = Date.parse(data.dateIn + 'T' + data.timeIn);
      data.datetimeArrival = datetimeArrival
         
      let packageDetails = washPackages[data.package]

        data.packagePrice = packageDetails['packagePrice']
        data.washerFee = packageDetails['washerFee']

      const vehicleregister  = new VehicleRegister(req.body);
      await vehicleregister.save()
      res.redirect('/washerreg?alert=success');
      console.log(req.body);
  }
  catch (err) {
    res.status(400).render('registerVehicle', { title: "Register Vehicle", alert: 'error' })
    console.log(err)
}
})


  
    module.exports = router;


