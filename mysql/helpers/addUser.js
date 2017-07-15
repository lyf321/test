/**
 * Created by liyangfan on 17-7-14.
 */

const conn = require("../mysql");

module.exports = function (data, callback) {

    console.log("data", data);

    let sql = "INSERT INTO user1(userName,name,age,gender,phone,email,remark) " +
        "VALUES('" + data.userName + "','" + data.name + "','" + data.age + "','" + data.gender + "','" + data.phone + "','" + data.email + "','" + data.remark + "')";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            callback({status: 1});
        }
    });
};
