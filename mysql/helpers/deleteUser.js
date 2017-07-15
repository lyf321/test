/**
 * Created by liyangfan on 17-7-15.
 */
const conn = require("../mysql");

module.exports = function (data, callback) {

    let sql = "delete from user1 where userName = '" + data.userName + "'";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            callback({status: 1});
        }
    });
};
