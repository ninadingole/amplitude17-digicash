var express = require('express');
var mongoose = require('mongoose');

var router = function(Customer) {
    var dummyCustomerRoute = express.Router();
    var customerController = require('../controller/CustomerController')(Customer);

    dummyCustomerRoute.route('/').get(customerController.get);
    dummyCustomerRoute.route('/list').get(customerController.getAll);

    return dummyCustomerRoute;
};

module.exports = router;