const express = require("express");
cont bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.render("Hello");
});

app.listen(3000, function(){
    console.log("Server on 3000");
    
});