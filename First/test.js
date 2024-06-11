const five = 5;
console.log(five);

const name = require('./second.js');
const http = require('http');
const url = require('url');
console.log(name.myName);
http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      var q = url.parse(req.url, true).query;
      var txt = q.year + ' ' + q.month;
      res.write(req.url + '/n');
      res.write(txt + '/n');
      res.end('Hello World');
}).listen(8080);
//   console.log(name.myDateTime);
