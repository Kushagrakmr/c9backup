var express = require("express");

var app = express();

app.get("/", function(request, response){
    response.send("Hi there!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started !!");
});


app.get("/bye", function(request, response){
    response.send("Goodbye !");
});

app.get("/dog", function(request, response){
    console.log("Someone made a request to /dog.");
    response.send("Wooof !!!");
});

app.get("/r/:subredditName", function(request, response) {
    console.log(request.params);
    response.send("Welcome to Kush");
});

app.get("/r/:SubredditName/comments/:id/:title/", function(request, response) {
        response.send("Kushagra")
})

app.get("/kush",function(request, response) {
    response.send("Kushgara Here working on nodemon");
});

app.get("*",function(request, response) {
    response.send("YOU ARE A STAR");
});

