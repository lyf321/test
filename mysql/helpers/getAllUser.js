/**
 * Created by liyangfan on 17-7-14.
 */

const conn = require("../mysql");

module.exports = function (data, callback) {

    let sql = "select * from user1;";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            if (results) {
                console.log("reerer",results);
                callback(results);
            } else {
                callback({status: 0});
            }
        }
    });
};
