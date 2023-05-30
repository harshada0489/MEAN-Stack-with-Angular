express = require('express');

eobj = express();

eobj.listen(5100, function(){
    console.log("Server started successfully");
});

// http://localhost:5100/
eobj.get('/', function(req, res){
    res.send("Server is live at root");
});

// http://localhost:5100/Angular
eobj.get('/Angular', function(req, res){
    res.send("Angular information");
});

// http://localhost:5100/Angular
eobj.get('/Python', function(req, res){
    res.send("Python information");
});