// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("./../models/movie.model")


// all your routes here
router.get("/movies", (req, res, next) => {
    res.render("movies/new-movie");
  
    Movie 
    .find()
    .then(movies=> {
        res.render("movies/new-movie",{movies}); // archivo del view
    })
    .catch(err=> console.log('This error has been triggered',err))  
    
  });


  router.post("/movies", (req, res, next) => {
    res.render("movies.routes");
  });






module.exports = router;