var express = require('express');
var app = new express();
var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Books'
    , Text: 'Books'
}, {
    Link: '/Authors'
    , Text: 'Authors'
        }];
var bookRouter = require('./src/routes/bookRoutes.js')(nav);
var adminRouter = require('./src/routes/adminRoutes.js')(nav);
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/admin', adminRouter);
app.use('/Books', bookRouter);
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello World from EJS'
        , nav: [{
            Link: '/Books'
            , Text: 'Books'
        }, {
            Link: '/Authors'
            , Text: 'Authors'
        }]
    });
});
app.listen(port, function (err) {
    console.log('Server running on ' + port);
});
