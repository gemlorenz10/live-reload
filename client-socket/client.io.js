var socket = io('http://localhost:8000');
socket.on('reload', ( data )=>{
    location.reload();
});