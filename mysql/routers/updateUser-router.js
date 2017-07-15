/**
 * Created by liyangfan on 17-7-15.
 */

const express = require("express");
const router = express.Router();
const updateUser = require("../helpers/updateUser");

router.post('/updateUser', (req, res) => {

    updateUser(req.body, (result, err)=> {
        let httpCode = 200;
        if (err) {
            httpCode = 400;
        } else {
            console.log("result: ", result);
            res.send({httpCode: httpCode, result})
        }
    });
});

module.exports = router;