const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let dataItems = require('./products.json')

io.on('connection', (socket) => {
  // client connect, akan masuk kesini
  // TEMPLATE: socket.emit('namaFungsiDiClient', {payload: 'sesuatu'})
  console.log('Socket.io client connected');
  socket.emit('fetchItems', dataItems)
  
});

server.listen(3000, () => {
  console.log('Listening on port:' + 3000);
}) ;