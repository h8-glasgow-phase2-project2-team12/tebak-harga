const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { getScore } = require('./function')

let dataItems = require('./products.json')
let players = []  //isi didapat saat login // username dan skor yg ditampilkan client didapat dari sini
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

  socket.on('fungsiSaatLogin', function(payload) { //saat login data player disimpan di array players
      console.log(payload)
      players.push(payload)
      socket.broadcast.emit('playerList', players)
  })

  socket.on('submitTebakan', function(payload) { // saat submit tebakan 
      console.log(payload)
      const fs = require('fs')
      let realPrice = 0
      let products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
      for (i = 0; i < products.length; i++) {
          if (products[i].id == payload.id) {
              realPrice = products.price
          }
      }

      let skor = getScore(realPrice, payload.price) 
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