var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var router = function (nav) {
    var books = [{
            title: 'War and Peace'
            , genre: 'Historical Fiction'
            , author: 'Lev Nikolayevich Tolstoy'
            , read: false
}
    , {
            title: 'Les Miserables'
            , genre: 'Historical Fiction'
            , author: 'Victor Hugo'
            , read: false
            }];
    adminRouter.route('/addBooks').get(function (req, res) {
        var url = "mongodb://localhost:27017/libraryApp";
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.insertMany(books, function (err, results) {
                res.send(results);
                db.close();
            });
        });
        //        res.send('inserting books');
    });
    return adminRouter;
};
module.exports = router;