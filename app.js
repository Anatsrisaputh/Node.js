const express = require('express');
// console.log(typeof express)
const app = express();


app.get('/', function (req, res) {
    res.send('Hello, world');
})

app.listen(3000);


