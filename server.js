const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/maciej'));

app.get('/maciej', function(req,res){
    res.sendFile(__dirname + '/maciej/index.html');
})

// Last get to handle PathLocationStrategy
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);