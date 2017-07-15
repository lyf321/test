/**
 * Created by liyangfan on 17-7-15.
 */
const conn = require("../mysql");

module.exports = function (data, callback) {

    console.log("data.userName", data.userName);

    let sql = "UPDATE user1 SET name='" + data.name + "',age='" + data.age + "',gender='" + data.gender + "',phone='" + data.phone + "',email='" + data.email + "',remark='" + data.remark + "' where userName='" + data.userName + "'";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            callback({status: 1});
        }
    });
};
