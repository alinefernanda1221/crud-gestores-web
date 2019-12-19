var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express();
var distDir = __dirname + '/dist';
app.use(express.static(distDir));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

var port = process.env.PORT || 8000
app.listen(port)

console.log('Servidor iniciado em http://localhost:' + port)