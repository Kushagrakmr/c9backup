var request = require("request");

request("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22", function(error, response, body){
    if(!error && response.statusCode==200){
        var parsedData = JSON.parse(body);
        console.log("The temp in London in Kelvin is :")
        console.log(parsedData.main.temp);
    }
});