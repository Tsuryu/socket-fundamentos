var socket = io();

// Escuchar eventos
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('se perdio la conexion con el servidor');
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'sergio',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('Respuesta del server ' + JSON.stringify(resp));
});