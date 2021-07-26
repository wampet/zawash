//Here, we’re importing Express into our routes file and then grabbing the router from it.
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Manager = require('../models/Manager');


//We then use the router to respond to any requests to the endpoint
//router.get tells the server what to do when a get request at a given route/path is called.
router.get('/', (req, res) => {
    res.render('register_manager', {
        title: "Register Manager",
        alert: req.query.alert
    })
})

router.post("/", async (req, res) => {
    
    const manager = new Manager(req.body);
    await Manager.register(manager, req.body.password, (err) => {
        if (err) {
            res.status(400).render('register_manager', { title: "Register Manager", alert: 'error' })
            console.log(err)
        } else {
            res.redirect('/login?alert=success')
        }
    })
})

module.exports = router;