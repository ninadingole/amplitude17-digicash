var express = require('express');
var qrModel = require('../models/qrModel');
var customer = require('../models/customerModel');
var router = function(nav) {
    var qrRoute = express.Router();

    qrRoute.route('/list').get(function(req, res) {
        qrModel.find().sort({ 'createdAt': 1 }).exec(function(err, qrCodes) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.render('booksListView', {
                    nav: nav,
                    qrcodes: qrCodes
                });
            }
        });
    });

    qrRoute.route('/:id').get(function(req, res) {
        qrModel.findById(req.params.id, function(err, code) {
            if (err) {
                res.status(500).send(err);
            } else {
                var data = {
                    nav: nav,
                    code: code,
                };
                customer.findById(code.customerId, function(err, cs) {
                    if (err) { res.status(500).send(err); } else {
                        data.customer = cs;
                        console.log(data);
                        res.render('qrView', data);
                    }
                });
            }
        });
    });

    return qrRoute;
};
module.exports = router;