const socketIo = require('socket.io')

exports.setupWebSocket = (server) => {  
  const io = socketIo(server)
  
  io.on('connect', (socket) => {
    console.log('id device~> ', socket.id)
  })
}
