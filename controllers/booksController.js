var mongoose = require("mongoose");
const db = require("../models");

module.exports = {
    // 'api/books' GET
    findAll(req, res) {
        db.Books.find({})
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    },


    saveFavorite(req, res) {
        db.Books.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    deleteFavorite(req, res) {
        db.Books.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
};