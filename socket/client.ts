function connect( server ){
    var socket = io( server );
    socket.on('reload', ( data )=>{
        location.reload();
    });
}