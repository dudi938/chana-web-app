var express = require('express');
var path = require('path');
var app = express();



app.listen(3000,function(err){
    if(err){
        console.log(err);
    }
});


app.get('/',function(req, res){
    res.send('hello world');
})
