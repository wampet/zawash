const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('carTracking', { error: false });
  });
  module.exports = router;