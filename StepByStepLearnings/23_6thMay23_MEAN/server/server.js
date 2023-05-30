express = require('express');

eobj = express();

port = 5100;

// eobj.listen(port, function(){
//     console.log("My server started successfully...");
// });

function StartServer()
{
    console.log("My server started successfully...");
}

eobj.listen(port, StartServer);

function GetMethod(request, response)
{
    response.send("My Server is live");
}

eobj.get('/', GetMethod);