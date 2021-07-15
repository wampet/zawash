const express = require("express");
const router = express.Router();
const ExpenseTrack = require('../models/ExpenseTrack')




router.get('/', (req, res) => {
    res.render('expenseTracking', { error: false });
  });

  router.post("/", (req,res)=>{
    console.log(req.body)
    const expensetracking = new ExpenseTrack(req.body);
    expensetracking.save()
        .then(() => { res.send('Thank you for your registering the Expenses!'); })
        .catch((err) =>{ console.log(err); 
                          res.send('Sorry! Something went wrong.');});
  })

  module.exports = router;