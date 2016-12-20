var express = require('express');
var bookRouter = express.Router();
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
bookRouter.route('/').get(function (req, res) {
    res.render('booksListView', {
        title: 'Books'
        , nav: [{
            Link: '/Books'
            , Text: 'Books'
        }, {
            Link: '/Authors'
            , Text: 'Authors'
        }]
        , books: books
    });
});
bookRouter.route('/:id').get(function (req, res) {
    var id = req.params.id;
    res.render('bookView', {
        title: 'Book View'
        , book: books[id]
        , nav: [{
            Link: '/Books'
            , Text: 'Books'
        }, {
            Link: '/Authors'
            , Text: 'Authors'
        }]
    });
});
module.exports = bookRouter;