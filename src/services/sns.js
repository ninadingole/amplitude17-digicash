var SnsService = function() {
    var sendMessage = function(phoneNumber, pin, cb) {

        var params = {
            Message: 'Your Pin for DigiCash Qr Code is ' + pin,
            MessageStructure: 'string',
            PhoneNumber: phoneNumber
        };
        sns.publish(params, function(err, data) {
            cb(err, data);
        });
    };

    return {
        sendMessage: sendMessage
    };
};

module.exports = SnsService;