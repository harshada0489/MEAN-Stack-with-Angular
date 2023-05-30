const express = require('express');

eobj = express();

eobj.use(express.json());

port = 5100;

eobj.listen(port,function(){
    console.log("Server is listening on port 5100");
})

eobj.get('/', function(req, res){
    res.send("Server is started successfully and this is the root");
});

batches = [
    {id: 1, name : "PPA",  duration : "4 months"},
    {id: 2, name : "LB",  duration : "3.5 months"},
    {id: 3, name : "Python",  duration : "3 months"},
    {id: 4, name : "LSP",  duration : "4.5 months"},
]

//read the data from database(GET)
eobj.get('/batches', ReadData);

function ReadData(req, res)
{
    res.send(batches);
}

eobj.get('/batches/:id', ReadDataID);

function ReadDataID(req, res)
{
    var icnt = 0;
    for(icnt = 0; icnt<batches.length; icnt++)
    {
        if(batches[icnt].id == req.params.id)
        {
            break;
        }
    }

    if(icnt == batches.length)
    {
        res.status(400).send("There is no such batches");
    }
    else
    {
        res.send(batches[icnt]);
    }
}


// eobj.delete('/batches/:id', DeleteDataID);

// function DeleteDataID(req, res)
// {
//     var icnt = 0;

//     for(icnt=0; icnt<batches.length; icnt++)
//     {
//         if(batches[icnt] == req.params.id)
//         {
//             break;
//         }
//     }

//     if(icnt == batches.length)
//     {
//         res.set(404).send("There is no such batches to delete");
//     }
//     else
//     {
//         batches.splice(icnt,1);
//         res.send(batches);
//     }
// }
eobj.delete('/batches/:id',(req,res)=>{

    var icnt = 0;

    for(icnt=0; icnt<batches.length; icnt++)
    {
        if(batches[icnt].id == req.params.id)
        {
            break;
        }
    }

    if(icnt == batches.length)
    {
        res.set(404).send("There is no such batches to delete");
    }
    else
    {
        batches.splice(icnt,1);
        res.send(batches);
    }
});

//Create the data into database (post)
eobj.post('/batches', function(req,res){

    const newdata = {
        id: batches.length+1,
        name : req.body.name,
        duration : req.body.duration
    };
    batches.push(newdata);
    res.send(batches);
});


//update the data from database(put)
eobj.put('/batches/:id', function(req,res){
    var icnt = 0;

    for(icnt=0; icnt<batches.length; icnt++)
    {
        if(batches[icnt].id == req.params.id)
        {
            break;
        }
    }

    if(icnt == batches.length)
    {
        res.set(404).send("There is no record to update");
    }
    else
    {
        batches[icnt].name = req.body.name;
        batches[icnt].duration = req.body.duration;

        res.send(batches);
    }
});