var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser : true});

var catSchema = new mongoose.Schema({
    name:String,
    age: Number,
    temperament : String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to db
// var Jack = new Cat({
//     name: "Norris",
//     age: 53,
//     temperament: "Evil"
// });

// Jack.save(function(error, cat){
//     if(error){
//         console.log("Something went worng!!");
//     } else {
//         console.log("We saved a cat to the DB:");
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function (err, cat) {
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats form db and console them

Cat.find({}, function(err, cats){
    if(err){
        console.log("Error Occured`");
        console.log(err);
    }else{
        console.log("All the cats");
        console.log(cats);
    }
});