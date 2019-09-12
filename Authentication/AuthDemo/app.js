var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
     
mongoose.connect("mongodb://localhost:27017/auth_demp_app", {useNewUrlParser : true});

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(require("express-session")({
   secret:"Rusty is the best in the world",
   resave: false,
   saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=======================
//ROUTES
//=======================
app.get("/", function(request, response){
    response.render("home");
});

app.get("/secret",isLoggedIn ,function(request, response){
    response.render("secret");
});

//Auth Routes

//show signUp form
app.get("/register",function(request, response){
    response.render("register");
});

app.post("/register", function(request, response){
    request.body.username
    request.body.password
    User.register(new User({username: request.body.username}), request.body.password, function(error, user){
        if(error){
            console.log(error);
            return response.render("register");
        }
        passport.authenticate("local")(request, response,function(){
            response.redirect("/secret");
        });
    });
});

//LOGIN ROUTES
//render login form
app.get("/login", function(request, response) {
    response.render("login");
});

//login logic
//middleware
app.post("/login",passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(request, response){
});

//logout Route
app.get("/logout", function(request, response) {
    request.logout();
    response.redirect("/");
}); 

function isLoggedIn(request, response, next){
    if(request.isAuthenticated()){
        return next();
    }
    response.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has Started");
});
