# live-reload

## Install
 1. Clone this repo.
 2. Install package dependencies.
 ```bash
    npm install
 ```

## Usage
 1. Include javascript files in your page.
 ```HTML
 <head>
    <script src="http://localhost:8000/client-socket/socket.io.min.js"></script>
    <script src="http://localhost:8000/client-socket/client.io.js"></script>
    <\head>
 ```

 2. Run the live-reload server.
 ```bash
node .\index.js --rootDir=..\path\to\project\
 ```

 ## Remarks

 - live-reload server runs on its own. 
 - You can use your prefered webserver for your project. 
 - You just need to include js files to connect to the live-reload server.
