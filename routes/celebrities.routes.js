// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model")

// GET DATABASE
router.get("/celebrities/", (req, res, next) => {
    
    Celebrity 
    .find()
    .then(celebrities=> {
        res.render("celebrities/celebrities",{celebrities}); // archivo del view
    })
    .catch(err=> console.log('This error has been triggered',err))  
    
  });
//   .catch((err)=> console.log('an error has occurred',err))

// Lets create a new celebrity

router.get("/celebrities/create-celebrity", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });


router.post("/celebrities/create-celebrity",(req,res)=>{
    const {name,occupation,catchPhrase} = req.body
    Celebrity
    .create({name,occupation,catchPhrase})
    .then(()=>{
        res.redirect(`/celebrities/`)  // como el render pero refresca la pagina para poder reinsertar 
    })
    .catch(err=> console.log('This error has been triggered',err))  

})















module.exports = router;