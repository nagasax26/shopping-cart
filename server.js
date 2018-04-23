var express = require('express');
var app = express();
app.listen(8000);

//server has access to node_modules
app.use(express.static('node_modules'));
//when we get a client request the server will try to locate the file in the public folder
app.use(express.static('public'));


//what to do when a client request the /met test url
app.get('/me', function(request, response){
    response.send('hello, from server');
})