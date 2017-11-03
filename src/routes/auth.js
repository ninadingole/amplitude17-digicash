var express = require('express');
var Customer = require('../models/customerModel');
var QrModel = require('../models/qrModel');

var authRouter = express.Router();

var router = function() {
    authRouter.route('/verifyqr/:id').get(function(req, res) {
        QrModel.findById(req.params.id, function(err, qrcode) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json({
                    qrId: qrcode.qrId,
                    name: qrcode.name
                });
            }
        });
    });
};

module.exports = router;