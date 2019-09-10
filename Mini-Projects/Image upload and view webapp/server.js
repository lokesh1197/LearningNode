var http = require("http");
var url = require("url");
// var formidable = require("formidable"),
//   sys = require("sys");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("<b>Hello World</b>");
//   response.end();
// }).listen(8888);


function start(route, handle) {
  function onRequest(request, response) {
    // if (request.url == "/upload" && request.method.toLowerCase() == "post") {
    //   // parse a file upload
    //   var form = new formidable.IncomingForm();
    //   form.parse(request, function(error, fields, files) {
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write("Received upload:\n\n");
    //     response.end(sys.inspect({fields: fields, files: files}));
    //   });
    // }
    //  // Show an upload form
    // response.writeHead(200, {'content-type': 'text/html'});
    // response.end(
    //   '<form action="/upload" enctype="multipart/form-data"'+
    //   'method="post">'+
    //   '<input type="test" name="title"><br>'+
    //   '<input type="file" name="upload" multiple="multiple"><br>'+
    //   '<input type="submit" value="Upload">'+
    //   '</form>'
    //   );
    var pathname = url.parse(request.url).pathname;
    // var postData = "";
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);

    // request.setEncoding("utf8");
    // request.addListener("data", function(postDataChunk) {
    //   postData += postDataChunk;
    //   console.log("Received post data chunk '" + postDataChunk + "'.");
    // });
    // request.addListener("end", function() {
    //   route(handle, pathname, response, postData);
    // });
    //
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write(content);
    // response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server started");
}

exports.start = start;
