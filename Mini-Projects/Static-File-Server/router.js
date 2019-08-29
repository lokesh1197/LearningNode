module.exports = function(request, response, handle, filename) {
  let fs = require('fs');
  let call = '';
  fs.realpath(filename, function(err, filename) {
    if (err) {
      console.error(err);
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end(err.message);
      return
    }
  filename = filename.split('%20').join(' ');
    fs.lstat(filename, function(err, stats) {
      if (err)  return console.error(err);
      try {
        if (stats.isFile()) {
          call = 'openFile';
        } else if (stats.isDirectory()) {
          call = 'listFiles';
        } else if (stats.isSymbolicLink()) {
        }
        else call = 'error';
      } catch(err) {
        console.log(err);
        call = 'error';
      }

      if (handle[call]) {
        handle[call](filename, response);
      } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 Not Found");
      }
    });
  });
};
