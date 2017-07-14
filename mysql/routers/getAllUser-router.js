/**
 * Created by liyangfan on 17-7-14.
 */

const express = require("express");
const router = express.Router();
const getAllUser = require("../helpers/getAllUser");

router.post('/getAllUser', (req, res) => {
    getAllUser(req.body, (result,err)=> {
        let httpCode = 201;
        if (err) {
            httpCode = 400;
        } else {
            res.send({httpCode: httpCode, user: result})
        }
    });
});

module.exports = router;