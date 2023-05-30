const express = require('express');

const app = express();

app.listen(5100, function(req,res){
    console.log("Yay Server started successfully");
});


//Handling cors
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept");

    next();
});

app.get('/', heyServer);

function heyServer(req, res)
{
    res.send("Server is ON");
}


app.get('/batches', mGetBatches);

function mGetBatches(req,res)
{
    res.json({"batch": "Physics", "Fees":10000});
}