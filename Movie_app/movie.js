var express = require("express");
var app = express();

var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(request_app, response_app) {
    response_app.render("search");
});


app.get("/results",function(request_app, response_app){
    var query = request_app.query.Search_term;
    
    var url = "http://www.omdbapi.com/?s="+ query +"&apikey=thewdb"
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            response_app.render("results",{data_website : data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started !!");
});