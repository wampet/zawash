//Here, we’re importing Express into our routes file and then grabbing the router from it.
const express = require("express");
const router = express.Router();
const ExpenseTrack = require('../models/ExpenseTrack')


//We then use the router to respond to any requests to the endpoint
//router.get tells the server what to do when a get request at a given route/path is called.
router.get('/', (req, res) => {
  res.render('expenseTracking', { title: "Register Expense" , alert: req.query.alert })
})

router.post("/", async(req, res) => {
  try {
      const expensetracking = new ExpenseTrack(req.body);
      await expensetracking.save();
      
      res.redirect('/expensetracking?alert=success');
      console.log(req.body);
  }
  catch (err) {
      res.status(400).render('expenseTracking', { title: "Register Expense", alert: 'error' })
      console.log(err);
  }
})

  //Finally, we export our router variable so that it can be imported and used in other files.
  module.exports = router;

