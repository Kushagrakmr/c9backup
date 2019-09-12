var express = require("express");

var app = express();

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started");
});

app.get("/", function(request, response) {
    response.send("Hi there welcome to my Assignment !!");
} )

app.get("/speak/:animal_name", function(request, response) {
    var sounds = {
        pig: "oink",
        cow: "maaa",
        dog: "woof woof !!",
        cat: "meow",
    }
    var name = request.params.animal_name.toLowerCase();
    var sound = sounds[name];
    response.send("The " + name + " says " + sound);
});

app.get("/repeat/:text/:no", function(request, response) {
    var textToRepeat = request.params.text;
    var timesRepeat = Number(request.params.no);
    
    var output;
    for(var i=0;i<timesRepeat;i++){
        output += output;
        output += " ";
    }
    
    response.send(output);
});



app.get("*", function(request, response){
    response.send("Page Not Found !!! What are you doing with your life??");
});
