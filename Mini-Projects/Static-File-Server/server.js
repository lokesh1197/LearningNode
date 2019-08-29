module.exports = function(handle, route) {
  let http = require('http');
  path = require('path');
  url  = require('url');
  fs   = require('fs');

  http.createServer(function(request, response) {
    let uri = url.parse(request.url).pathname;
    let filename = path.join(uri);
    // let filename = path.join(process.cwd(), uri);
    route(request, response, handle, filename);
    // path.exists(filename, function (exists) {
    // if (!path.isAbsolute(filename)) {
    //   response.writeHead(404, {'Content-Type': 'text/plain'});
    //   response.end("404 Not Found\n");
    //   return;
    // }
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end(filename);

    // fs.readDir();
    // fs.readFile(filename, "binary", function(error, file) {
    //   if (error) {
    //     response.writeHead(500, {"Content-Type": "text/plain"});
    //     response.end(error + "\n");
    //   }
    //
    //   response.writeHead(200);
    //   response.write(file, "binary");
    //   response.end();
    //   // });
    // });
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write('<b>Hello World</b>');
    // response.write(JSON.stringify(reqUrl));
    // response.end();
  }).listen(8888);
}
