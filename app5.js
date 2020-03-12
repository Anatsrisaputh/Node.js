const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const itemRoute = require('./routes/itemRoute');
const bodyParser = require('body-Parser')

app.use('/user', userRoute);
app.use('/item', itemRoute);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log('server is running')
});