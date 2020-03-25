const socketIo = require('socket.io')

exports.setupWebSocket = (server) => {
  console.log('teste')
  
  const io = socketIo(server)
  
  io.on('connect', (socket) => {
    console.log('id device~> ', socket.id)
  })
}
