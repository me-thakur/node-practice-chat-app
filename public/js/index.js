var socket = io();

socket.on('connect', function () {
  console.log('connected to the server');

  socket.emit('createMessage', {
    to: "Vivek",
    text: "Alright"
  });
});

socket.on('disconnect', function () {
  console.log("Disconnected from server");
});

socket.on('newMesage', function (message) {
  console.log('newMesage', message);
});
