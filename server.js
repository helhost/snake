var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 4598; // you can use any port
app.listen(port);
console.log('server on' + port);
