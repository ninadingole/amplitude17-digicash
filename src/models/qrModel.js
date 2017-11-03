var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var qrModel = new Schema({
    qrId: {
        type: String
    },
    customerId: {
        type: String
    },
    amount: {
        type: Number
    },
    pin: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});

module.exports = mongoose.model('QrModel', qrModel);