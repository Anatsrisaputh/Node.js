const express = require('express');
const app = express();


app.get('/user', function (req, res) {
    res.send('Hello first User');
})

app.get('/user/second', function (req, res) {
    res.send('Hello second User');
})


app.listen(3000, function () {
    console.log('server is running')
});