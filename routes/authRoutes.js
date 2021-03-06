const express = require('express');
const passport = require('passport');
const router = express.Router();


//We then use the router to respond to any requests to the endpoint
//router.get tells the server what to do when a get request at a given route/path is called.
router.get('/login', (req, res) => {
    res.render('login', { title: "Log In", alert: req.query.alert })
})

// checks username and password using passport
router.post('/login', passport.authenticate('local',
    { failureRedirect: '/login?alert=error' }),
    (req, res) => {
        req.session.user = req.user
        res.redirect('/');
})
//This is used for when someone clicks on the logout. It simply destroys the session that was given
//The passport is withdrawn
router.get('/logout', (req, res) => {
 req.session.destroy(()=> {
    res.redirect('/login')
  })
})

//Finally, we export our router variable so that it can be imported and used in other files.
module.exports = router; 
