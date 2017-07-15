/**
 * Created by liyangfan on 17-7-15.
 */

const express = require("express");
const router = express.Router();
const deleteUser = require("../helpers/deleteUser");

router.post('/deleteUser', (req, res) => {
    deleteUser(req.body, (result,err)=> {
        let httpCode = 200;
        if (err) {
            httpCode = 400;
        } else {
            res.send({httpCode: httpCode, status: result})
        }
    });
});

module.exports = router;