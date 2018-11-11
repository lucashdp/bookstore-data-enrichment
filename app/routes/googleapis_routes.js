module.exports = function (app) {
    const books = require('google-books-search');
    //GET
    app.get('/v1/public/books', (req, res) => {
        let search = 'a';

        if (req.query.search)
            search = req.query.search;

        books.search(search, function (error, results) {
            if (!error) {
                res.send(results);
            } else {
                res.send(error);
            }
        });
    });
    app.get('/v1/public/book/:bookId', (req, res) => {
        let bookId = 0;

        if (req.params.bookId)
            bookId = req.params.bookId;

        books.lookup(bookId, function (error, results) {
            if (!error) {
                res.send(results);
            } else {
                res.send(error);
            }
        });
    });
};