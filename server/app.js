const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { getScore } = require('./function')

let dataItems = require('./products.json')
let players = []  //isi didapat saat login // username dan skor yg ditampilkan client didapat dari sini

io.on('connection', (socket) => {
  // client connect, akan masuk kesini
  // TEMPLATE: socket.emit('namaFungsiDiClient', {payload: 'sesuatu'})
  console.log('Socket.io client connected');
  socket.emit('fetchItems', dataItems)

  socket.on('fungsiSaatLogin', function(payload) { //saat login data player disimpan di array players
      players.push(payload)
      socket.emit('playerList', players)
  })

  socket.on('guessPrice', function(payload) { // saat submit tebakan 
      console.log(payload)
      const fs = require('fs')
      let realPrice = 0
      for (i = 0; i < dataItems.length; i++) {
          if (dataItems[i].id == payload.id) {
              realPrice = dataItems[i].price
          }
      }
      console.log('realPrice=', realPrice);

      let skor = getScore(realPrice, payload.price) 
      for (i = 0; i < players.length; i++) {
          if (players[i].username == payload.username) {
              players[i].score += skor
          }
      }
      console.log('skor=', skor);
      console.log(players);
      socket.emit('playerList', players)
  })
  
});

server.listen(3000, () => {
  console.log('Listening on port:' + 3000);
});