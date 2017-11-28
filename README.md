# live-reloader
Works on node v6.11.3
## Install
 ```bash
    npm install -g live-reloader
 ```
## Usage
 1. Use default settings
 ```HTML
 <head>
    <script src="http://localhost:8085/client-socket/socket.io.min.js"></script>
    <script src="http://localhost:8085/client-socket/default.io.js"></script>
    </head>
 ```
 2. When using another port.
```HTML
 <head>
    <script src="http://localhost:9000/client-socket/socket.io.min.js"></script>
    <script src="http://localhost:9000/client-socket/client.io.js"></script>
    <script>
        let live = new Client();
        live.connect('http://localhost:9000');
    </script>
</head>
```

 3. Run the live-reloader server.
 ```bash
lv-reloader .\index.js --target=..\path\to\project\
 ```
 ## Options
 1. **--target** - directory to watch for changes or your project directory. *Default value '.'* or the current working directory.
 2. **--port** - HTTP port to use when default port is not open. *Default value is '8085'*.
 ## Remarks

 - live-reload server runs on its own.
 - You can use your prefered webserver for your project. 
 - You just need to include js files to connect to the live-reload server.
