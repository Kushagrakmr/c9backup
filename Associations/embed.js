var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser : true});


//app.use(bodyParser.urlencoded({extended : true}));

var postSchema = new mongoose.Schema({
    title : String,
    content : String
});

//USER - email, name
var userSchema = new mongoose.Schema({
    email : String,
    name : String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email : "kushagrakumar12@gmail.com",
//     name : "Kush"
// });

// newUser.posts.push({
//     title: "How to be disciplined ?",
//     content: "Just kidding, I seriously doubt there is a way."
// });
// newUser.save(function(error, user){
//   if(error) {
//       console.log(error);
//   } else {
//       console.log(user);
//   } 
// });

// var newPost = new Post({
//   title : "Reflecton on my behaviour." ,
//   content : "They are sometimes in my favour and mostly against myself"
// });

// newPost.save(function(error, post){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(post); 
//     }
// });

User.findOne({name: "Kush"}, function(error, user){
    if(error) {
        console.log(error);
    } else {
        user.posts.push({
            title : "Some things I really hate.",
            content : "Wake UP , Wasting time and Myself"
        });
        user.save(function(error, user){
            if( error){
                console.log(error);
            } else {
                console.log(user);
            }
        });
    }
    
});