var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Laddakh", image: "https://c1.staticflickr.com/1/231/446876174_e15ca57e05_o.jpg"},
        {name: "Sikkim",  image: "https://c2.staticflickr.com/6/5581/14860971851_4362334b72_b.jpg"},
        {name: "Minnisota", image: "https://c2.staticflickr.com/4/3915/15158046300_56b40456af_b.jpg"},
        {name: "Hills",  image: "https://c2.staticflickr.com/6/5581/14860971851_4362334b72_b.jpg"},
        {name: "Mountains", image: "https://c2.staticflickr.com/4/3915/15158046300_56b40456af_b.jpg"},
        {name: "Valley", image: "https://c1.staticflickr.com/1/231/446876174_e15ca57e05_o.jpg"},
        {name: "Darzeeling", image: "https://c2.staticflickr.com/4/3915/15158046300_56b40456af_b.jpg"},
        {name: "Nepal",  image: "https://c2.staticflickr.com/6/5581/14860971851_4362334b72_b.jpg"},
        {name: "Laddakh", image: "https://c1.staticflickr.com/1/231/446876174_e15ca57e05_o.jpg"},
        {name: "Sikkim",  image: "https://c2.staticflickr.com/6/5581/14860971851_4362334b72_b.jpg"},
        {name: "Darzeeling", image: "https://c2.staticflickr.com/4/3915/15158046300_56b40456af_b.jpg"},
        {name: "Sikkim",  image: "https://c2.staticflickr.com/6/5581/14860971851_4362334b72_b.jpg"},
        {name: "Darzeeling", image: "https://c2.staticflickr.com/4/3915/15158046300_56b40456af_b.jpg"},  
        {name: "Darzeeling", image: "https://c2.staticflickr.com/4/3915/15158046300_56b40456af_b.jpg"}
    ];
    
app.get("/",function(request, response){
    response.render("landing");
});

app.get("/campgrounds",function(request, response){
  
    
    response.render("campgrounds",{campgrounds_app:campgrounds});
});

app.post("/campgrounds",function(request, response){
    //get data from form and add to the array
    var name = request.body.name;
    var image = request.body.image;
    var newCampground = {name: name, image:image};
    campgrounds.push(newCampground);
    //redirect
    response.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(request, response) {
    response.render("new.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelp Camp Server Has Started");
});
