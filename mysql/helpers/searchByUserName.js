/**
 * Created by liyangfan on 17-7-16.
 */

const conn = require("../mysql");

module.exports = function (data, callback) {

    let sql = "select * from user1 where userName='"+data.userName+"'";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            if (results) {
                callback(results);
            } else {
                callback({status: 0});
            }
        }
    });
};