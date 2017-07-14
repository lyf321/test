const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const getALLUser = require("./mysql/routers/getAllUser-router");
app.use('/',getALLUser);

var server = app.listen(4000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;