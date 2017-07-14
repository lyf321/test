/**
 * Created by liyangfan on 17-7-14.
 */

const express = require("express");
const router = express.Router();
const addUser = require("../helpers/addUser");

router.post('/addUser', (req, res) => {

    addUser(req.body, (result, err)=> {
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