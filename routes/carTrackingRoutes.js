const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('carTracking', { error: false });
  });

  router.post("/carTracking",(req,res)=>{
    console.log(req.body)
    res.send("The data has been submitted")
    res.render('carTracking', { error: false });
});



  module.exports = router;