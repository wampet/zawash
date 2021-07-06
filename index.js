//DEPENDENCIES
const express = require("express");
const homeRoutes = require("./routes/homeRoutes");
const registationRoutes = require("./routes/registrationRoutes");
const washPackagesRoutes = require("./routes/washPackagesRoutes");
const carTrackingRoutes = require("./routes/carTrackingRoutes");
const expenseTrackingRoutes = require("./routes/expenseTrackingRoutes");
//INSTANTIATIONS
const app = express();

//CONFIGURATIONS OR SETTINGS
app.set("view engine", "pug");
app.set("views", "./views");

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

// css access
app.use(express.static('public'));

//ROUTES
//this one is used for rendering/displaying the login page
app.use('/home', homeRoutes);
app.use('/cartracking', carTrackingRoutes);
app.use('/register', registationRoutes);
app.use('/packages', washPackagesRoutes);
app.use('/expenseTracking', expenseTrackingRoutes);
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
app.listen(2000,()=>{
console.log("I am listening in on port 2000")});