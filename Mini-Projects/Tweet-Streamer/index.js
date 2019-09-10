let https = require('https');
    http = require('http');
    fs = require('fs');
    url = require('url');
    path = require('path');
    events = require('events');

function load_static_file(uri, response) {
  let filename = path.join(process.cwd(), uri);
  fs.readFile(filename, "binary", function(err, file) {
    if (err) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.end(err.message);
    }

    response.writeHead(200);
    response.end(file, "binary");
  });
}


// let twitter_client = http.createClient(80, "api.twitter.com");
let tweet_emitter = new events.EventEmitter();
let count = 0;

function get_tweets() {
  let options = {
    hostname: 'api.twitter.com',
      method: 'GET',
      path: "/1/statuses/public_timeline.json",
      port: 80,
      key: fs.readFileSync('client-key.pem'),
      cert: fs.readFileSync('client-crt.pem'),
      ca: fs.readFileSync('ca-crt.pem')
  };
  let request = https.request(options, function(response) {
    let body = "";
    response.addListener("data", function (data) {
      count++;
      body += data;
      console.log('get data', count);
      if (count % 5 == 0) {
        let tweets = JSON.parse(body);
        console.log(tweets);
        if (tweets.length > 0) {
          tweet_emitter.emit("tweets", tweets);
          console.log("emitted");
        }
      }
    });
    response.addListener("end", function() {
      let tweets = JSON.parse(body);
      if (tweets.length > 0) {
        tweet_emitter.emit("tweets", tweets);
        console.log("emitted");
      }
    });
    request.end();
  });
  // let request = https.request({
  //   port: 80,
  //   host: 'api.twitter.com',
  //   method: 'GET',
  //   path: "/1/statuses/public_timeline.json"
  // });
//   request.addListener("response", function (response) {
//     let body = "";
//   request.end();
// }
setInterval(get_tweets, 5000);

let options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('certificate.pem'),

  requestCert: true
};

http.createServer(function(request, response) {
  let uri = url.parse(request.url).pathname;
  console.log(uri);
  if (uri == "/stream") {
    let listener = tweet_emitter.addListener("tweets", function(tweets) {
      console.log(tweets);
      response.writeHead(200, {"content-type": "text/plain"});
      response.write(JOSN.stringify(tweets));
      response.end();
      // clearTimeout(timeout);
    });
    // let timeout = setTimeout(function() {
    //   response.writeHead(200, {"Content-Type": "text/plain"});
    //   response.write(JSON.stringify([]));
    //   response.end();
    //
    //   tweet_emitter.removeListener(listener);
    // }, 10000);
  } else {
    load_static_file(uri, response);
  }
}).listen(8888);
