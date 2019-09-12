var express     = require("express"),
     app        = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image:String,
    description : String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
        
//         name: "Mountains",
//          image: "https://c2.staticflickr.com/4/3915/15158046300_56b40456af_b.jpg",
//          description: "This is the famous mountain and it has a spledid view." 
//     },function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly Creataed Campground");
//             console.log(campground);
//         }
//     });


mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser : true});
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

app.get("/campgrounds/:id", function(request, response) {
    
    //find the campgrounds with the ids
    Campground.findById(request.params.id, function(error, foundCampgouound){
        if(error){
            console.log(error);
        } else{
            // render show template with that campground
            response.render("show", {campground: foundCampgouound});
            
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server Has Started");
});
