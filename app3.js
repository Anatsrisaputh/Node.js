const express = require('express');
const app = express();


app.get('/hello', function (req, res) {
    res.send('Hello GET');
})

app.post('/hello', function (req, res) {
    res.send('hello POST');
})

app.put('/hello', function (req, res) {
    res.send('Hello PUT');
})

app.delete('/hello', function (req, res) {
    res.send('Hello DELETE');
})



app.listen(3000, function () {
    console.log('server is running')
});