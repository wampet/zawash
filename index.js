//INSTANTIATIONS
const express = require("express");
const app = express();

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//This is a custom middleware that tells us when a request is made
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});
//CONFIGURATIONS
app.set("view engine", "pug");
app.set("views", "./views");

//ROUTES
//This route is for the homepage
//this one is used for rendering/displaying the registration page
app.get('/home', function(req, res, next) {
    res.render('registration', { error: false });
  });
  //this one is used for rendering/displaying the login page
app.get('/login', function(req, res, next) {
  res.render('login', { error: false });
});
app.get('/', function(req, res, next) {
  res.render('layout1', { error: false });
});
//This is used to show the retrieve information from the home page
app.post("/home",(req,res)=>{
    console.log(req.body)
    res.send("The data has been submitted")
});

//The code below is use to handle non existing routes.
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL, please try another')
});

//This is the port we are listening on
app.listen(2000,function(){
console.log("I am listening in on port 2000")});