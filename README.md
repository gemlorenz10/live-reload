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
    <script src="http://localhost/socket.io.min.js"></script>
    <script>
        var socket = io('http://localhost:8085');
        socket.on('reload', ( data )=>{
            location.reload();
        });
    </script>
    </head>
```
Or you can use this link for socket io client
```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.slim.js"></script>
```

 ### Run the live-reloader server.
 ```bash
    lvr --target=..\path\to\project\
 ```

 ## Options
 1. **--target** - directory to watch for changes or your project directory. *Default value '.'* or the current working directory.
 2. **--port** - HTTP port to use when default port is not open. *Default value is '8085'*.
 
 ## Remarks
- live-reloader's web-server is not yet complete.
- You cannot serve your whole project using live-reloader.
- Use your preferred web server for your project.