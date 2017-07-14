/**
 * Created by liyangfan on 17-7-14.
 */
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "lyf123456",
    database: 'users',
    port: 3306
});

module.exports = conn;