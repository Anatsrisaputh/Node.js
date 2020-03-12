const express = require('express');
const router = express.Router();


router.get('./first', function (req, res) {
    res.send('hello first item');
})

router.get('/second', function (req, res) {
    res.send('Hello second item');
})



module.exports = router;
