var socket = io.connect('http://localhost:3000');

var nameInput = document.getElementById('name')
  , messageInput = document.getElementById('message')
  , sendBtn = document.getElementById('btn')
  , messages = document.getElementById('messages');

sendBtn.addEventListener('click', function() {
  // EMIT EVENTS
  socket.emit('message', {
    message: messageInput.value,
    name: nameInput.value
  })
})

// LISTEN FOR EVENTS

socket.on('chat', function(data) {
  messages.innerHTML += '<p><strong>' + data.name + '</strong>: ' + data.message + '</p>'
})
