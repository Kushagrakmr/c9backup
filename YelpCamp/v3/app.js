var express     = require("express"),
     app        = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campgrounds"),
    seedDB      = require("./seeds")
    

//seedDB();

mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", {useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

    
app.get("/",function(request, response){
    response.render("landing");
});

app.get("/campgrounds",function(request, response){
    //Gat all campgrounds from the database
    Campground.find({}, function(error, allCampgrounds){
        if(error){
            console.log(error);
        } else {
            response.render("index",{campgrounds_app:allCampgrounds});
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
    response.render("new.ejs");
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
            response.render("show", {campground: foundCampgouound});
            
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server Has Started");
});
