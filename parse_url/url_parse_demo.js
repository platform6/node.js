var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);

}
).listen(8080);


//http://localhost:8080/?year=2017&month=July

// above will parse the URL to provide '2017 July' 
// q is an object created by the parse - 
// and the true parameter creates object, false creates undecoded string