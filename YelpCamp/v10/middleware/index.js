//all middleware goes here
var Campground = require("../models/campgrounds");
var Comment = require("../models/comment")

var middlewareObj = {};

middlewareObj.checkCommentOwnership = function(request, response, next){
     if(request.isAuthenticated()){
        Comment.findById(request.params.comment_id, function(error, foundComment){
            if(error){
                response.redirect("back");
            } else {
                //does user own comment ? 
                if(foundComment.author.id.equals(request.user._id)){
                    next();
                } else {
                    response.redirect("back");
                }  
            }
        });
    } else{
        response.redirect("back");
    }
};

middlewareObj.checkCampgroundOwnership = function(request, response, next){
     if(request.isAuthenticated()){
        Campground.findById(request.params.id, function(error, foundCampgouound){
            if(error){
                response.redirect("back");
            } else {
                //does user own campground ?
                if(foundCampgouound.author.id.equals(request.user._id)){
                    next();
                } else {
                    response.redirect("back");
                }  
            }
        });
    } else{
        response.redirect("back");
    }
};


middlewareObj.isLoggedIn = function(request, response, next){
    if(request.isAuthenticated()){
        return next();
    }
    response.redirect("/login");
}


module.exports = middlewareObj;
