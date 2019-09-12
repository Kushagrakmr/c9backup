var express = require("express");
var router  = express.Router();
var Campground = require("../models/campgrounds");

router.get("/campgrounds",function(request, response){
    //Gat all campgrounds from the database
    Campground.find({}, function(error, allCampgrounds){
        if(error){
            console.log(error);
        } else {
            response.render("campgrounds/index",{campgrounds_app:allCampgrounds});
        }
    });
});    

router.post("/campgrounds",function(request, response){
    //get data from form and add to the array
    var name    = request.body.name;
    var image   = request.body.image;
    var desc    = request.body.description;
    var newCampground = {name: name, image:image, description:desc};
    //Create a new campground and save it to the datbase
    Campground.create(newCampground, function(error, newlyCreated){
       if(error){
           console.log(error);
       } else {
           response.redirect("/campgrounds");
       }
    });
});

router.get("/campgrounds/new", function(request, response) {
    response.render("campgrounds/new");
});


//SHOW ROUTE - shws more info about one campground
router.get("/campgrounds/:id", function(request, response) {
    
    //find the campgrounds with the ids
    Campground.findById(request.params.id).populate("comments").exec(function(error, foundCampgouound){
        if(error){
            console.log(error);
        } else{
            console.log(foundCampgouound);
            // render show template with that campground
            response.render("campgrounds/show", {campground: foundCampgouound});
            
        }
    });
});

function isLoggedIn(request, response, next){
    if(request.isAuthenticated()){
        return next();
    }
    response.redirect("/login");
}


module.exports = router;