let socket = io('http://localhost:9000');
socket.on('reload', ( data )=>{
    location.reload();
});