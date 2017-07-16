/**
 * Created by liyangfan on 17-7-16.
 */
const express = require("express");
const router = express.Router();
const searchByUserName = require("../helpers/searchByUserName");

router.post('/searchByUserName', (req, res) => {

    searchByUserName(req.body, (result, err)=> {
        let httpCode = 201;
        if (err) {
            httpCode = 400;
        } else {
            console.log("req.body:",result);
            res.send({httpCode: httpCode, user: result})
        }
    });
});

module.exports = router;