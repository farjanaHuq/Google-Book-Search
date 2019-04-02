const path = require("path");
const router = require("express").Router();


const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const APIKEY = "AIzaSyDWMvsNuMvY-zpviiF7AjTQKmGwpcyA0Fg";


router.get("/books", (req, res) => {
  axios
    .get(`${BASEURL}+q=${req.query}&key=${APIKEY}`)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
