const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const getALLUser = require("./mysql/routers/getAllUser-router");
const addUser = require("./mysql/routers/addUser-router");
const deleteUser = require("./mysql/routers/deleteUser-router");
const updateUser = require("./mysql/routers/updateUser-router");
const searchByUserName = require("./mysql/routers/searchByUserName-router");

app.use('/',getALLUser);
app.use('/',addUser);
app.use('/',deleteUser);
app.use('/',searchByUserName);

var server = app.listen(4000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;