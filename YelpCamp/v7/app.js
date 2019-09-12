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
    
var commentRoutes     = require("./routes/comments"),
    campgroundRoutes  = require("./routes/campgrounds"),
    indexRoutes        = require("./routes/index");

mongoose.connect("mongodb://localhost:27017/yelp_camp_v7", {useNewUrlParser : true});
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

app.use(indexRoutes);
app.use(commentRoutes);
app.use(campgroundRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server Has Started");
});
