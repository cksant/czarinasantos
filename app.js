const express = require("express");
const app = express();

app.use(express.static("public"));

//Set default to EJS
app.set("view engine","ejs");

app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Page requests
app.get("/", function(req, res){
    res.render("index");
});

app.get("/index", function(req, res){
    res.render("index");
});

app.get("/home", function(req, res){
    res.render("index");
})

app.get("/aboutme", function(req, res){
    res.render("aboutme")
})

app.get("/projects", function(req, res){
    res.render("projects")
})

app.get("/services", function(req, res){
    res.render("services");
})

app.get("/contactme", function(req, res){
    res.render("contactme");
})

app.get("*", function(req, res){
    res.send("Error: Page does not exist.");
})

app.listen(3000, function(){
    console.log("NodeJS Web Application is now running on port 3000.")
});