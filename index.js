var express = require('express');
var app = express();
var JsonDB = require('node-json-db');
var db = new JsonDB("myDataBase", true, false);

//point to the "public" folder
app.use(express.static('public')); 

//send "hello" to a server and get a response
// app.get('/hello', function (req, res) {
//     res.send('Hello World');
// });

// /save is a routing path
app.get('/save/:color', function (req, res) {
    
    //Pushing the data into the database 
    //With the wanted DataPath 
    //By default the push will override the old value 
        //db.push("/test1","super test");
    db.push("/test1", req.params.color);
    res.send('saved!');
});

app.get('/load', function (req, res) {
    var data = db.getData("/test1");
    res.send(data);
});

app.listen(8080, "0.0.0.0", function () {
    console.log('Example app listening on port 3000!');
})