var express = require("express");
var router  = express.Router();
var Campground = require("../models/campgrounds");
var Comment    = require("../models/comment");
//=========================
//COMMENT ROUTES
//=========================

router.get("/campgrounds/:id/comments/new", isLoggedIn, function(request, response) {
    //find campground by id
    Campground.findById(request.params.id, function(error, campground){
      if (error) {
          console.log(error);
      } else {
          response.render("comments/new",{campground : campground});
      } 
    });
});

router.post("/campgrounds/:id/comments", isLoggedIn   ,function(request , response){
   //lookup the campgrounds using ID
   Campground.findById(request.params.id, function(error, campground) {
       if (error){
           console.log(error);
           response.redirect("/campground");
       } else {
           Comment.create(request.body.comment, function(error, comment){
             if(error){
                 console.log(error);
             } else {
                 comment.author.id = request.user._id;
                 comment.author.username = request.user.username;
                 comment.save();
                 campground.comments.push(comment);
                 campground.save();
                 response.redirect("/campgrounds/" + campground._id);
             } 
           });
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