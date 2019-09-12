var bodyParser   =  require("body-parser"),
methodOverride   = require("method-override"),
expressSanitizer = require("express-sanitizer"),
mongoose         = require("mongoose"),
express          = require("express"),
app              = express();

// APP COnfig
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

//it should be used after the body parser.
app.use(expressSanitizer());



//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title :String,
    image:String,
    body : String,
    created:{type:Date, default:Date.now}
});
 var Blog = mongoose.model("Blog",blogSchema);

//RESTFUL ROUTES

app.get("/",function(request, response) {
    response.redirect("/blogs");
});

//INDEX ROUTE
app.get("/blogs", function(request, response){
    Blog.find({},function(error,blogs){
        if(error){
            console.log("Error !!");
        } else {
            response.render("index", {blogs:blogs});
        } 
    });
});

//NEW ROUTE
app.get("/blogs/new",function(request, response) {
    response.render("new");
})



//CREATE ROUTE
app.post("/blogs",function(request, response){
    //sanitizing input
    // console.log(body);
    // request.body.blog.body = request.sanitizer(request.body.blog.body);
    // console.log("======================");
    //create blog
    Blog.create(request.body.blog, function(err, newBlog){
        if(err){
            response.render("new");
        } else {
            //then redirect to the index
            response.redirect("blogs");
        } 
    });
}); 

//SHOW ROUTE
app.get("/blogs/:id", function(request, response) {
    Blog.findById(request.params.id, function(err , foundBlog){
        if(err){
            response.redirect("/blogs");
        } else {
            response.render("show", {blog: foundBlog});
        }
    });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(request, response) {
    Blog.findById(request.params.id, function(err , foundBlog){
        if(err){
            response.redirect("/blogs");
        } else {
            response.render("edit", {blog: foundBlog});
        }
    });
});


//UPADATE ROUTE

app.put("/blogs/:id", function(request, response){
    Blog.findByIdAndUpdate(request.params.id, request.body.blog, function(error, updatedBlog){
    if (error){
        response.redirect("/blogs");
    } else {
        response.redirect("/blogs/" + request.params.id);
    } 
    });
});

//DELETE ROUTE
app.delete("/blogs/:id", function(request, response){
    //destroy blog
    Blog.findByIdAndRemove(request.params.id, function(error){
       if(error) {
           response.redirect("/blogs");
       } else {
           response.redirect("/blogs");
       }
    });
    
    //redirect somewhere
});


app.listen(process.env.PORT, process.env.IP,function(){
   console.log("Server has Started");
});