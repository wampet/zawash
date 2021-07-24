const express = require('express');
const passport = require('passport');
const router = express.Router();

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

module.exports = router; 