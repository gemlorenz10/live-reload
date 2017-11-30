#!/usr/bin/env node
const http = require('http');
const app = http.createServer(httpServer);
const io = require('socket.io')(app);
const fs = require('fs');

const argv = require('yargs').argv;
const path = require('path');
const chokidar = require('chokidar');

// Options and Defaults
let httpPort = (argv.port) ? argv.port : 9000;
let targetDir = (argv._) ? path.resolve(argv._.toString()) : '.';

// Create server and listen to connection
app.listen(httpPort);
io.on('connection', function (websocket) {
});

// Watch target directory
let watcher = chokidar.watch( targetDir, { 
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true
  });
watcher.on('add', target => {
            io.emit('reload', {});
            console.log(`File ${target} has been added`)
        })
        .on('change', target => {
            io.emit('reload', {});
            console.log(`File ${target} has been changed`)
        })
        .on('unlink', target => {
            io.emit('reload', {});
            console.log(`File ${target} has been removed`)
        });
// Start message
console.log('Server running at: localhost:', httpPort )
console.log('Watching: ', targetDir)

// catch errors
// process.on('uncaughtException', function (err) {
//     console.log('Caught exception: ' + err);
//   });

// FUNCTIONS
/**
 * handle request
 * @param {*} req 
 * @param {*} res 
 */
function httpServer (req, res) {
    let data;
    let status;
    let e = path.parse(req.url);
    let get = path.join( e.dir, e.base );
    let head = ( e.ext == '.js' ) ? {'Content-Type': 'text/javascript'} : {'Content-Type': 'text/plain'};     
    
    if( fs.existsSync( __dirname + get ) ) {
        status = 200;
        data = fs.readFileSync( __dirname + get ).toString();
    }else{
        status = 404;
        data = 'File not found!'
    }

    res.writeHead(status, {'Content-Type': 'text/plain'})
    res.end(data);
}
