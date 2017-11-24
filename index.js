const http = require('http');
const app = http.createServer(handler);
const io = require('socket.io')(app);
const argv = require('yargs').argv;
const path = require('path');
const chokidar = require('chokidar');
const fs = require('fs');

// Options and Defaults
var httpPort = (argv.port) ? argv.port : 8000;
var rootDir = (argv.rootDir) ? path.resolve(argv.rootDir) : '.';

// create server
app.listen(httpPort);

// listen to incoming connection
io.on('connection', function (socket) {
});

// watch on file changes
var watcher = chokidar.watch( rootDir, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true
  });

watcher
.on('add', path => {
    io.emit('reload', {});
    console.log(`File ${path} has been added`)
})
.on('change', path => {
    io.emit('reload', {});
    console.log(`File ${path} has been changed`)
})
.on('unlink', path => {
    io.emit('reload', {});
    console.log(`File ${path} has been removed`)
});

console.log('Watching: ', rootDir)


/**
 * handle request
 * @param {*} req 
 * @param {*} res 
 */
function handler (req, res) {
    var data;
    var e = path.parse(req.url);
    var head = ( e.ext == '.js' ) ? {'Content-Type': 'text/javascript'} : {'Content-Type': 'text/plain'}; 
    try{
        data = fs.readFileSync( path.join('.', e.dir, e.base) ).toString(); 
    }
    catch( e ){
        res.writeHead(400)
        res.write('404 not found!');
        res.end();
    }
    
    res.writeHead(200, head)
    res.write(data);
    res.end();
}

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
  });
