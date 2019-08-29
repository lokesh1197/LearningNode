let server = require('./server');
let requestHandlers = require('./requestHandlers');
let router = require('./router');

let handle = {};
handle['/'] = requestHandlers.listFiles;
handle['openFile'] = requestHandlers.openFile;
handle['listFiles'] = requestHandlers.listFiles;

server(handle, router);
