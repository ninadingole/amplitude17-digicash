var express = require('express');
var qrModel = require('../models/qrModel');

var router = function() {
    var qrRoute = express.Router();

    qrRoute.route('/list').get(function(req, res) {
        qrModel.find(function(err, qrCodes) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.render('booksListView', {
                    qrcodes: qrCodes
                });
            }
        });
    });


    return qrRoute;
};
module.exports = router;