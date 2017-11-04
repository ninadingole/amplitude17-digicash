var express = require('express');
var mongoose = require('mongoose');
var qrModel = require('../models/qrModel');

var router = function() {
    var apirouter = express.Router();


    apirouter.route('/:id').get(function(req, res) {
        qrModel.findOne({
            'qrId': req.params.id
        }, function(err, qrcode) {
            if (err) {
                res.status(500).send(err);
            } else if (qrcode) {
                res.status(200).json({
                    'qrId': qrcode.qrId,
                    'name': qrcode.name
                });
            } else {
                res.status(404).json({
                    'status': 'NOT_FOUND'
                });
            }
        });
    });


    return apirouter;
};

module.exports = router;