const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', { error: false });
  });


router.post("/", (req,res)=>{
    console.log(req.body)
  
});
  //Finally, we export our router variable so that it can be imported and used in other files.
  module.exports = router;
