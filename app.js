var express = require('express'),
    bodyparser = require('body-parser'),
    path = require('path');

var app = express();
var port = process.env.port || 8080;

app.set('view engine','ejs')
app.set('viewa',path.join(__dirname,'views'));
app.use(bodyparser());
var todoitems = [];
app.listen(port,function(){
    console.log("Server is started on port number "+port)
})
app.get("/",function(req,res){
    //res.send("Simple Example for Express Framework!!");
    todoitems = [];
    res.render("index",{
        title:'Welcome to Express !!',
        items:todoitems
    });
});

app.get("/showitems",function(req,res){
    //res.send("Simple Example for Express Framework!!");
    res.render("index",{
        title:'Welcome to Express !!',
        items:todoitems
    });
});


app.post("/add",function(req,res){
    var newitem = req.body.newitem;
    console.log("New item is :"+newitem);
    todoitems.push({
        id:todoitems.length +1,
        desc:newitem
    });
    res.redirect("/showitems");
});