var express = require('express');
var path = require('path');
var app = express();

var mainPagePath  = path.join(__dirname,'\\public\\docs\\examples\\carousel\\index.html');
//app.use(express.static(path.join(__dirname , 'public')));
app.use("public", express.static(path.join(__dirname, 'public')));

app.listen(3000,function(err){
    if(err){
        console.log(err);
    }
});


app.get('/HomePage',function(req, res){
    res.sendFile(mainPagePath,true);
})
