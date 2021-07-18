const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const WasherRegister = require('../models/WasherRegister');



router.get('/', (req, res) => {
  res.render('registerWasher', { title: "Register Car Washer" , alert: req.query.alert })
})

router.post("/", async(req, res) => {
  try {
      const washerregister = new WasherRegister(req.body);
      await washerregister.save();
      
      res.redirect('/washerregistration?alert=success');
      console.log(req.body);
  }
  catch (err) {
      res.status(400).render('registerWasher', { title: "Register Washer", alert: 'error' })
      console.log(err);
  }
})

router.post('/delete-washer', async (req, res) => {
  try {
      await WasherRegister.deleteOne({ _id: req.body.id })
      res.redirect('back')
  } catch (err) {
      res.status(400).send("Unable to delete item in the database");
  }
})



    module.exports = router;
