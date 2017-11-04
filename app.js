var express = require('express');
var app = new express();
var db = require('mongoose');
var bodyParser = require('body-parser');

db.connect('mongodb://ninad_ingole:nidshack%401991@cluster0-shard-00-00-5k2vi.mongodb.net:27017,cluster0-shard-00-01-5k2vi.mongodb.net:27017,cluster0-shard-00-02-5k2vi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', { useMongoClient: true });
db.Promise = global.Promise;

var port = process.env.PORT || 5000;
var nav = [{
    Link: '/mockcustomer/list',
    Text: 'Add New QR'
}, {
    Link: '/qr/list',
    Text: 'List All Qr codes'
}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');



var Customer = require('./src/models/customerModel');
var listRoute = require('./src/routes/listAllQr.js')(nav);
var customerRoute = require('./src/routes/customer.js')(nav, Customer);
var authApi = require('./src/routes/auth.js')();

var dummyCustomerRoute = require('./src/routes/dummyCustomers.js')(Customer);

app.use('/api', authApi);
app.use('/qr', listRoute);
app.use('/mockcustomer', dummyCustomerRoute);
app.use('/add', customerRoute);
app.use('/generateqr', customerRoute);
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello World from EJS',
        nav: nav
    });
});
app.listen(port, function(err) {
    console.log('Server running on ' + port);
});