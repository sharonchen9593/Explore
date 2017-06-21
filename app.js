var express = require ('express');
var app = express();
var cors = require('cors')
app.use(cors())


var port = process.env.PORT || 3000;


app.use('/', express.static(__dirname + '/public'));

app.listen(port);