# Live Reload
Reloads the page when file changes are detected. Took advantage of socketio to communicate with browser in realtime.

## Usage
1. Add this code to the page.
```javascript
    <script src="http://localhost:8000/client-socket/socket.io.min.js"></script>
    <script src="http://localhost:8000/client-socket/client.io.js"></script>
</script>
```


2. Run script
```
node .\index.js --rootDir=..\path\to\project\
```

## Options

- **--port**     - The http port the script is goin to use. Default is  *8000* 
- **--rootDir**  - Directory that is going to watch. Default is the current directory ( . ).

## Notes
 ```
 Run the webserver you like separately with live-reload. Use different port for live reload.
 ```