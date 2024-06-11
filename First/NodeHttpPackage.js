var http = require('http');
http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(req.url);
      res.write('Hello world');
      res.end('End of the response');
}).listen(8080);
