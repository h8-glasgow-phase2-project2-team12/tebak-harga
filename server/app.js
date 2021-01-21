const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { getScore } = require('./function')

let dataItems = require('./products.json')
let players = []  //isi didapat saat login // untuk dikirim ke client
// contoh isi player = [
//     {
//         username: 'aa',
//         score: 0
//     },
//     {
//         username: 'bb',
//         score: 20
//     }
// ]

io.on('connection', (socket) => {
  // client connect, akan masuk kesini
  // TEMPLATE: socket.emit('namaFungsiDiClient', {payload: 'sesuatu'})
  console.log('Socket.io client connected');
  socket.emit('fetchItems', dataItems)

  socket.on('fungsiSaatLogin', function(payload) {
      console.log(payload)
      players.push(payload)
      socket.broadcast.emit('playerList', players)
  })

  socket.on('submitTebakan', function(payload) {
      console.log(payload)
      let skor = getScore('harga asli dari json', payload.price) 
      for (i = 0; i < players.length; i++) {
          if (players[i].username == payload.username) {
              players[i].score += skor
          }
      }
      socket.broadcast.emit('playerList', players)
  })
  
});

server.listen(3000, () => {
  console.log('Listening on port:' + 3000);
});