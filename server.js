const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');



// app.use(express.static(__dirname + '/maciej'));

// app.get('/gfx/militaria/', function(req, res){
//     fs.readdir('./maciej/gfx/militaria/', (err, files) => {
//           res.send(files);
//       });
// });

// app.get('/gfx/motoryzacja/', function(req, res){
//     fs.readdir('./maciej/gfx/motoryzacja/', (err, files) => {
//           res.send(files);
//       });
// })
// app.get('/maciej/*', function(req, res){
//     res.sendFile(path.join(__dirname + '/maciej/index.html'));
// });

// Last get to handle PathLocationStrategy

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);