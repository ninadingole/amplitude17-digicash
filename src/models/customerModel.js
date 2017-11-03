var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var customerModel = new Schema({
    accountNumber: {
        type: String
    },
    ifsc: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('Customer', customerModel);