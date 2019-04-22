const router = require('express').Router();
//const axios = require(axios");
const db = require('../models');


router.get("/books", (req, res) => {
  db.Book.findAll({})
    .then(resp => { 
        res.json(resp);})
    .catch(function (err) {
        res.json(err);
    });
  
  });

router.post("/books", (req, res) => {
  
    db.Book.create({
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link 
    })
    .then(data => {
        res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  
  });

  // delete a company
router.delete('/books/:id', function (req, res) {

    db.Book.remove( { _id : req.params.id})
         .then(function (data) {
            res.json(data);
         })
         .catch(function (err) {
            console.log(err);
            throw err;
         });
    ;

});

  module.exports = router;