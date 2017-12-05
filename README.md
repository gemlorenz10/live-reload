# live-reloader
live-reloader reloads your project in browser once changes are detected. 

## Install
1. Install nodejs with npm
2. Install live-reloader
 ```bash
    npm install -g live-reloader
 ```
## How to use.
### Connect to live-reloader server
```HTML
 <head>
    <script src="http://localhost:9000/socket.io.js"></script>
    </head>
```
### Connect when using different port
```HTML
 <head>
    <script src="http://localhost:8080/socket.io.js"></script>
    <script>
        connect('http://localhost:8080');
    </script>
    </head>
```

### Run the live-reloader server.
 ```bash
    lvr \target\directory\
 ```
*if no destination/target specified it watches the current working directory.*

## Options
 1. **--port** - HTTP port to use when default port is not open. *Default value is '9000'*.
 
## Remarks
- live-reloader's web-server is not yet complete.
- You cannot serve your whole project using live-reloader.
- Use your preferred web server for your project.