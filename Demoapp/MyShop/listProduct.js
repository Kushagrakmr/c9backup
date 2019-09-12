var faker = require("faker");



for(var i=0; i < 10; i++){
    
    var kush = faker.commerce.productName();
    var kEmail = faker.commerce.price();
    console.log(kush + " - " + "$" + kEmail);
    
}