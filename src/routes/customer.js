var express = require('express');
var customerRoute = express.Router();
const uuidv4 = require('uuid/v4');
var qrModel = require('../models/qrModel');
var gpc = require('generate-pincode');
var AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';
var sns = new AWS.SNS();


var router = function(nav, Customer) {
        var customerController = require('../controller/CustomerController')(Customer);
        customerRoute.route('/').get(function(req, res) {
            res.render('generateQr', {
                title: 'Add New QR code',
                nav: nav
            });
        }).post(function(req, res) {
                var qrCode = new qrModel(req.body);
                console.log(qrCode.phone);
                qrCode.qrId = uuidv4();
                qrCode.pin = gpc(6);
                var params = {
                    Message: 'Your Pin for Qr Cash is ' + qrCode.pin + ' form Amount: ' + qrCode.amount + 'INR.',
                    MessageStructure: 'string',
                    PhoneNumber: qrCode.phone
                };

                qrCode.save(function(err) {
                        if (err) {
                            res.status(500).send(err);
                        }
                        sns.publish(params, function(err, data) {
                                if (err) {
                                    res.status(500).send(err);
                                });

                            res.json({
                                'transaction_id': qrCode.qrId,
                            });
                        });



                });

            customerRoute.route('/:id').get(function(req, res) {
                customerController.getById(req.params.id, function(err, customer) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.render('generateQr', {
                            customer: customer,
                            nav: nav,
                            title: 'Genrate Qr'
                        });
                    }
                });
            });

            return customerRoute;
        };
        module.exports = router;