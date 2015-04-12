/**
 * Created by JC Liu on 4/12/2015.
 * Description: The main file of cod to start with.
 */

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World~\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');