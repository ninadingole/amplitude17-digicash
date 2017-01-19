var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectid = require('mongodb').ObjectID;
var router = function (nav) {
    bookRouter.route('/').get(function (req, res) {
        var url = process.env.MONGODB_URL;
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.find({}).toArray(function (err, results) {
                res.render('booksListView', {
                    title: 'Books',
                    nav: nav,
                    books: results
                });
            });
        });
    });
    bookRouter.route('/:id').get(function (req, res) {
        var id = new objectid(req.params.id);
        var url = "mongodb://localhost:27017/libraryApp";
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.findOne({
                _id: id
            }, function (err, results) {
                console.log(results);
                res.render('bookView', {
                    title: 'Books',
                    nav: nav,
                    book: results
                });
            });
        });
    });
    return bookRouter;
};
module.exports = router;