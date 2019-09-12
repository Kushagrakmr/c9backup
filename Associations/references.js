var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser : true});

var Post = require("./models/post");

var User = require("./models/user");

Post.create({
    title: "How to cook the best meat pt 2",
    content: "cook it, add salt add spices and mix them dont forget to add the secret ingredient."
}, function(error, post){
    if(error){
        console.log(error);
    } else {
        User.findOne({email: "bob@gmail.com"}, function(error, foundUser){
            if(error){
                console.log(error);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(error, data){
                    if(error) {
                        console.log(error);
                    } else {
                        console.log(data);
                    }
                })
            }
        });
      }
});

//Find user
//Find all posts for that user 

// User.findOne({email : "bob@gmail.com"}).populate("posts").exec(function(error,user){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(user);
//     } 
// });


// User.create({
//     email : "bob@gmail.com",
//     name : "Bob Marley"
// });