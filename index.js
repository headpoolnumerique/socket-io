const express 	= require('express');
const app 		= express();
const http 		= require('http');
const server 	= http.createServer(app);

const io = require('socket.io')(server);

const PORT = process.env.PORT || 5001;
app.use(express.static('public'))

io.on('connection', (socket) => {

  nbr_user = io.engine.clientsCount ;
  io.emit('usercount', io.engine.clientsCount)

  socket.on('disconnect', () => {
    console.log('user disconnected')
    console.log('nbr connected : ', io.engine.clientsCount)
    io.emit('usercount', io.engine.clientsCount)
  })

})

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));