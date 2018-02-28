
var path = require('path');
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get('/api/cars', (req, res) => {
    res.json(cars);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


var cars =[
    {
        "make": "honda",
        "model": "crv "
     },
    {
        "make": "ford",
        "model": "f150 "
    },
    {
        "make": "jeep",
        "model": "cherokee"
    },
    {
        "make": "gmc",
        "model": "suburban "
    } 
];