const router = require('express').Router();
const axios = require('axios');
const db = require('../models');
const JSON = require('circular-json');


const ApiKey = "AIzaSyDrbGlYM7C1m_Dg0krbkxKKc1KknuA5Yhs";

var url = `https://www.googleapis.com/books/v1/volumes?`
// q=${query}&key=${ApiKey}
// +inauthor:${inauthorKey}

//search books
router.get("/searchBooks/:query/:inauthorKey", (req, res) => {
     const query = req.params.query;
     const inauthorKey = req.params.inauthorKey;

    axios.get( 
        `https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:${inauthorKey}&key=${ApiKey}`
       
        )
      .then(
          results => {
            // res.json(results.data);
            var resultArr = [];

            for(var i=0; i<results.data.items.length; i++ ){

                // console.log("Link :", results.data.items[i].selfLink);
                // console.log("Title",  results.data.items[i].volumeInfo.title);
                // console.log("Description:", results.data.items[i].volumeInfo.description);
                // console.log("Thumbnail:",   results.data.items[i].volumeInfo.imageLinks.thumbnail);
                // console.log("===========================================================================")
                resultArr.push({
                      link: results.data.items[i].selfLink,
                      title: results.data.items[i].volumeInfo.title,
                      description: results.data.items[i].volumeInfo.description,
                      thumbnail: results.data.items[i].volumeInfo.imageLinks.thumbnail
                })
            }
            // console.log("===========================================================================")
            // console.log("===========================================================================")
           // console.log(resultArr);
            res.json(resultArr);
        })
       
      .catch(err => {
        res.status(422).json({error: err});
     });
});
  

//displays all books
router.get("/books", (req, res) => {
  db.Book.findAll({})
    .then(resp => { 
        console.log(resp);
        res.json(resp);})
    .catch(function (err) {
        res.json(err);
    });
  
  });

  // create new book
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

// deletes a book
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