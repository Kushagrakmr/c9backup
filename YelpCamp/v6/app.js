var express       = require("express"),
     app          = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground    = require("./models/campgrounds"),
    Comment       = require("./models/comment"),
    User          = require("./models/user"),
    seedDB        = require("./seeds")
    

mongoose.connect("mongodb://localhost:27017/yelp_camp_v6", {useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//seedDB();

//PASSPORT CONFIGUARTION
app.use(require("express-session")({
    secret : "Rusty is the best and cutest dog!",
    resave: false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(request, response, next){
    response.locals.currentUser = request.user;
    next();
});
    
app.get("/",function(request, response){
    response.render("landing");
});

app.get("/campgrounds",function(request, response){
    //Gat all campgrounds from the database
    Campground.find({}, function(error, allCampgrounds){
        if(error){
            console.log(error);
        } else {
            response.render("campgrounds/index",{campgrounds_app:allCampgrounds});
        }
    });
});    

app.post("/campgrounds",function(request, response){
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

app.get("/campgrounds/new", function(request, response) {
    response.render("campgrounds/new");
});


//SHOW ROUTE - shws more info about one campground
app.get("/campgrounds/:id", function(request, response) {
    
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

//=========================
//COMMENT ROUTES
//=========================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(request, response) {
    //find campground by id
    Campground.findById(request.params.id, function(error, campground){
      if (error) {
          console.log(error);
      } else {
          response.render("comments/new",{campground : campground});
      } 
    });
});

app.post("/campgrounds/:id/comments", isLoggedIn   ,function(request , response){
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
                   //create new comment
                   //connect new campground page
                   //redirect
                 campground.comments.push(comment);
                 campground.save();
                 response.redirect("/campgrounds/" + campground._id);
             } 
           });
       }
   });

});

//======================
//AUTHENTICATION ROUTES
//======================


//show register form
app.get("/register",function(request, response) {
    response.render("register");
});

//handle signUp logic
app.post("/register", function(request, response) {
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
app.get("/login", function(request, response) {
    response.render("login");
});

app.post("/login", passport.authenticate("local",
    {
        successRedirect : "/campgrounds",
        failureRedirect : "/login"
    }),function(request, response) {
});

//logout route
app.get("/logout", function(request, response) {
    request.logout();
    response.redirect("/campgrounds");
});

function isLoggedIn(request, response, next){
    if(request.isAuthenticated()){
        return next();
    }
    response.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server Has Started");
});
