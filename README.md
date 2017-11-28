# live-reloader
live-reloader reloads your project in browser once changes are detected. 

## Install
Install nodejs with npm
 ```bash
    npm install -g live-reloader
 ```
## Usage
### Connect to live-reloader server
```HTML
 <head>
    <script src="http://localhost/socket.io.min.js"></script>
    <script>
        var socket = io('http://localhost:8085');
        socket.on('reload', ( data )=>{
            location.reload();
        });
    </script>
    </head>
```
 ### Run the live-reloader server.
 ```bash
    lv --target=..\path\to\project\
 ```
 ## Options
 1. **--target** - directory to watch for changes or your project directory. *Default value '.'* or the current working directory.
 2. **--port** - HTTP port to use when default port is not open. *Default value is '8085'*.
 
 ## Remarks
- live-reloader's web-server is not yet complete.
- You cannot serve your whole project using live-reloader.
- Use your preferred web server for your project.