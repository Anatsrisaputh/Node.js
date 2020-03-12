const express = require('express');
const app = express();


app.get('/bye', function (req, res) {
    res.send('Goodbye');
})

app.listen(5555);