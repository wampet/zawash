const express = require("express");
const router = express.Router();

router.get('/', (req, res) =>  {
    res.render('registration', { error: false });
  });

  router.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("The data has been submitted");
});


  
  module.exports = router;