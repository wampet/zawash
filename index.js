//DEPENDENCIES
const moment = require('moment');
const express = require("express");
const mongoose = require("mongoose");
const homeRoutes = require("./routes/homeRoutes");
const washPackagesRoutes = require("./routes/washPackagesRoutes");
const expenseTrackingRoutes = require("./routes/expenseTrackingRoutes");
const registerVehicleRoutes = require("./routes/registerVehicleRoutes");
const registerWasherRoutes = require("./routes/registerWasherRoutes");
const registerManagerRoutes = require("./routes/registerManagerRoutes");
const reportRoutes = require('./routes/reportRoutes');
const authRoutes = require('./routes/authRoutes');
const Manager = require('./models/Manager')
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

require('dotenv').config();

//INSTANTIATIONS
const app = express();

//mongoose connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
  

//CONFIGURATIONS OR SETTINGS
app.locals.moment = moment
app.set("view engine", "pug");
app.set("views", "./views");



//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

// css access
app.use(express.static('public'));


app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(Manager.createStrategy());
passport.serializeUser(Manager.serializeUser());
passport.deserializeUser(Manager.deserializeUser());

// this one checks if the person trying to access the site has a session or not
// var loginChecker = function (req, res, next) {
//   if (req.path != '/login' && !req.session.user) {
//     res.redirect('/login')
//   }
//   next()
// }
// app.use(loginChecker)


// ROUTES
// this one is used for rendering/displaying the login page
app.use('/', homeRoutes);
app.use('/packages', washPackagesRoutes);
app.use('/expensetracking', expenseTrackingRoutes);
app.use('/vehicleregistration',registerVehicleRoutes);
app.use('/washerregistration',registerWasherRoutes);
app.use('/report', reportRoutes);
app.use('/', authRoutes);
app.use('/registermanager', registerManagerRoutes);


//The code below is use to handle non existing routes.
app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL, please try another')
});

//This is the port we are listening on
app.listen(2000,()=>{
console.log("I am listening in on port 2000")});