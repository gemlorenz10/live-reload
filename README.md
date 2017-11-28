# live-reload

## Install
 1. Clone this repo.
 2. Install package dependencies.
 ```bash
    npm install
 ```
## Usage
 1. Use default settings
 ```HTML
 <head>
    <script src="http://localhost:8085/client-socket/socket.io.min.js"></script>
    <script src="http://localhost:8085/client-socket/client.io.js"></script>
    </head>
 ```
 2. Default http port is 8085. Make sure its open. 
 3. Run the live-reload server.
 ```bash
node .\index.js --target=..\path\to\project\
 ```
 ## Options
 1. **--target** - directory to watch for changes or your project directory. *Default value '.'* or the current working directory.
 
 ## Remarks

 - live-reload server runs on its own. 
 - You can use your prefered webserver for your project. 
 - You just need to include js files to connect to the live-reload server.
