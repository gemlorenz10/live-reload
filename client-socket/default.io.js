var socket = io('http://localhost:8085');
socket.on('reload', ( data )=>{
    location.reload();
});