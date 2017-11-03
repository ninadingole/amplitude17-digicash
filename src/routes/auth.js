var express = require('express');
var Customer = require('../models/customerModel');
var QrModel = require('../models/qrModel');

var authRouter = express.Router();

var router = function() {
    authRouter.route("/verifyqr/:id").get(function(req, res) {
        console.log(req.params.qrid);
    });
};

module.exports = router;