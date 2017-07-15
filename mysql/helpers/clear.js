/**
 * Created by liyangfan on 17-7-15.
 */
const conn = require("../mysql");

module.exports = function () {

    let sql = "truncate table user1";
    conn.query(sql);
};
