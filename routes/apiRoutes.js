const path = require("path");
const router = require("express").Router();
const axios = require("axios")


const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const APIKEY = "AIzaSyDWMvsNuMvY-zpviiF7AjTQKmGwpcyA0Fg";


router.get("/books", (req, res) => {
  const queryText = req.query;
  console.log("Query", queryText);
  axios
    .get(`${BASEURL}q=${queryText}&key=${APIKEY}`)
    .then(results => res.json(results))
    .catch(err => {
      console.log(err.response)
      res.status(422).json({error: err})
    });
});


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
