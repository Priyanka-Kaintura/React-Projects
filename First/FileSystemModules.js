// Nodes JS as File Server
/*
Includes Functionalities like:
1. Read Files
2. Create Files
3. Update Files
4. Delete Files
5. Rename Files
 */
var fs = require('fs');
var http = require('http');

var x = 1;
// if (x == 1) {
//       fs.appendFile('myNewFile.txt', 'Hello  There! How are You??', function (err) {
//             if (err) throw err;
//             console.log('Saved');
//       });
// }

if (x == 1) {
      fs.open('myFile2.txt', 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved File 2 using open Function.');
      });
}

if (x == 1) {
      fs.writeFile(
            'myNewFile3.txt',
            'Hello There! Nice Opening this new file to talk to you!!',
            function (err) {
                  if (err) throw err;
                  console.log('Updated File 2 using WriteFile Function.');
            },
      );
}

if (x == 1) {
      fs.appendFile('myNewFile.txt', 'How about we chat some more?', function (err) {
            if (err) throw err;
            console.log('Updated First File using AppendFile Function.');
      });
}

if (x == 1) {
      fs.writeFile('myNewFile.txt', 'This is Priyanka. Whats your Name??', function (err) {
            if (err) throw err;
            console.log('Updated First File using WriteFile Function.');
      });
}

// HOW TO DELETE A FILE USING NODE JS FILE SYSTEM MODULE

if (x == 1) {
      fs.unlink('myFile2.txt', function (err) {
            if (err) throw err;
            console.log('Deleted File2 using unlink Function.');
      });
}

if (x == 1) {
      fs.rename('myNewFile3.txt', 'myrenamedFile.txt', function (err) {
            if (err) throw err;
            console.log('File Renamed.');
      });
}
http.createServer(function (req, res) {
      fs.readFile('HtmlFile.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
      });
}).listen(8080);
