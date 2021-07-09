const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('expenseTracking', { error: false });
  });

  router.post("/expenseTracking",(req,res) => {
    console.log(req.body);
    res.render('expenseTracking', { title: 'Expense tracking' });
    res.send("The data has been submitted");
});


  module.exports = router;