const socket = require('socket.io'),
      express = require('express');

const app = express();
const server = app.listen(3000, () => {
  console.log('Listening to port: 3000');
})

app.use(express.static(__dirname))

let io = socket(server);

io.on('connection', socket => {
  console.log('connection has been made: ', socket.id);


  socket.on('message', function(message) {
    console.log(socket.id, message);
    io.sockets.emit('chat', message)
  })

})
