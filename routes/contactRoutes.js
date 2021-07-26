//Here, we’re importing Express into our routes file and then grabbing the router from it.
const express = require("express");
const router = express.Router();

//We then use the router to respond to any requests to the endpoint
//router.get tells the server what to do when a get request at a given route/path is called.
router.get('/', (req, res) => {
    res.render('contact', { error: false });
  });


router.post("/", (req,res)=>{
    console.log(req.body)
  
});
  //Finally, we export our router variable so that it can be imported and used in other files.
  module.exports = router;
