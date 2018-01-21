var express = require('express');

var app = express();
var port = process.env.port || 8080;
app.listen(port,function(){
    console.log("Server is started on port number "+port)
})
app.get("/",function(req,res){
    res.send("Welcome to node");
    res.end();
});