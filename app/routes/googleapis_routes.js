module.exports = function (app) {
    const books = require('google-books-search');

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
};