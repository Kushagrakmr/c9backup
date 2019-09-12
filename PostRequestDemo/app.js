var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

var friends = ["Kush", "Me", "Myself", "Rimmi"];

app.get("/",function(request, response){
   response.render("home");
}); 

app.post("/addfriend",function(request, response){
    var newfriend = request.body.newfriend;
    friends.push(newfriend);
    response.redirect("/friends");
});

app.get("/friends", function(request, response){
    response.render("friends", {friends_view:friends});
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server Started");
});