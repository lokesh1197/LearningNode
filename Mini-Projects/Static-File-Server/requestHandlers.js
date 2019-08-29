function openFile(filename, response) {
  let fs = require('fs');
  fs.readFile(filename, "binary", function(err, file) {
    if (err) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.end(err.message);
    }

    response.writeHead(200);
    response.write(file, "binary");
    // fs.createReadStream(file).pipe(response);
    response.end();
  });
}
function listFiles(dirname, response) {
  let fs = require('fs');
  let path = require('path');
  fs.readdir(dirname, ['utf8', true], function(err, files) {
    if (err) {
      console.log('Error: ' , err.message);
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.end(err.message);
      return
    }

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<a href='/'>" + "Home" + "</a><br/>");
    files.forEach(function(file) {
      let filename = path.join(dirname, file);
      let stats = fs.lstatSync(filename);
      response.write("<a href='" + filename + "'>" + filename + "\t\t" + stats["size"] + "\t\t" + stats["atime"] + "</a><br/>");
    });
    response.end();
  });
}

exports.openFile = openFile;
exports.listFiles = listFiles;
