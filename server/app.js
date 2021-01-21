const app = require('express')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = 3000

io.on('connection', (socket) => {
    console.log('socket.io client connected')
})

server.listen(port, () => {
    console.log('listening in port ' + port)
})