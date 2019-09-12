var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(request, response){
    response.render("home");
});

app.get("/posts",function(request, response) {
    var posts = [
        {title: "Post 1", author: "Kush" },
        {title: "Post 2", author: "Rimmi"},
        {title: "Post 3", author: "Golu"}
    ];
        
    response.render("posts",{posts_ejs:posts}); 
});

app.get("/fallinlovewith/:thing",function(request,response){
   var thing = request.params.thing;
   response.render("love",{thingVar:thing});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is Listening !!");
});