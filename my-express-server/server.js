//jshint esversion:6

const { response } = require('express');
const express = require('express');

const app = express(); //app is used to refer to express module.

app.get("/", function(request, response){
    response.send("<h1>Jello World</h1>")
});  //tell the server what to give the browser when it requests.

app.get("/contact", function(req, res){
    res.send("Contact me at: 4cibear@gmail.com")
})

app.get('/about', function(req, res){
    res.send("About me: My name is Cierra. I love kittens and music and food! Thanks for visiting my page!")
})

app.get("/hobbies", function(req, res){
    res.send("<h2>My hobbies:</h2><ul><li>Reading</li><li>Thinking</li><li>Being with husband</li></ul>")
})

app.listen(3000, function(){        //listen for http requests on this server
    console.log("Server started on port 3000.") //callback funtion
}); 
