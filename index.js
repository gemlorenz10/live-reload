#!/usr/bin/env node
const http = require('http');
const app = http.createServer(httpServer);
const io = require('socket.io')(app);
const argv = require('yargs').argv;
const path = require('path');
const chokidar = require('chokidar');
const fs = require('fs');

// Options and Defaults
var httpPort = (argv.port) ? argv.port : 8085;
// let httpPort = 8085;
var targetDir = (argv._) ? path.resolve(argv._.toString()) : '.';

// create server
app.listen(httpPort);

// listen to incoming connection
io.on('connection', function (socket) {
});

// watch on file changes
var watcher = chokidar.watch( targetDir, {
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
// catch errors
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
  });

console.log('Server running at: localhost:', httpPort )
console.log('Watching: ', targetDir)



/**
 * handle request
 * @param {*} req 
 * @param {*} res 
 */
function httpServer (req, res) {
    var data;
    var e = path.parse(req.url);
    var head = ( e.ext == '.js' ) ? {'Content-Type': 'text/javascript'} : {'Content-Type': 'text/plain'}; 
    try{
        data = fs.readFileSync( path.join(targetDir, e.dir, e.base) ).toString(); 
    }
    catch( e ){
        res.writeHead(500)
        res.write('Internal Server Error, Unhandled exception');
        res.end();
    }
    
    res.writeHead(200, head)
    res.write(data);
    res.end();
}
