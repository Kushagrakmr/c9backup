 var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User    = require("../models/user");
  
  
  
router.get("/",function(request, response){
    response.render("landing");
});


//======================
//AUTHENTICATION ROUTES
//======================


//show register form
router.get("/register",function(request, response) {
    response.render("register");
});

//handle signUp logic
router.post("/register", function(request, response) {
    var newUser = new User({username: request.body.username});
    User.register(newUser, request.body.password, function(error, user){
        if(error) {
            console.log(error);
            return response.render("register");
        }
        passport.authenticate("local")(request, response, function(){
            response.redirect("/campgrounds");
        });
    });
});


//show login form 
router.get("/login", function(request, response) {
    response.render("login");
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect : "/campgrounds",
        failureRedirect : "/login"
    }),function(request, response) {
});

//logout route
router.get("/logout", function(request, response) {
    request.logout();
    response.redirect("/campgrounds");
});

function isLoggedIn(request, response, next){
    if(request.isAuthenticated()){
        return next();
    }
    response.redirect("/login");
}

module.exports = router;