var email = require('emailjs');

var server = email.server.connect({
    user: 'amplitudehackathon@gmail.com',
    password: 'hackathon123',
    host: 'smtp.gmail.com',
    ssl: true
});

var emailService = function() {
    var sendEmail = function(data) {
        server.send({
            text: 'Hey howdy',
            from: 'QR Cash Code',
            to: data.name + ' <' + data.email + '>',
            cc: '',
            subject: 'Greetings',
            attachment: [{
                data: "<html>" +
                    "<h3>Your QR code for Cash is :</h3>" +
                    "<img src='" + data.imageUrl + "' />" +
                    "<footer>Generated by Qr Code App</footer></html>",
                alternative: true
            }]
        }, function(err, message) {
            return (err) ? false : true;
        });

    };
    return {
        sendEmail: sendEmail
    };
};
module.exports = emailService;