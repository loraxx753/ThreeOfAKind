const {ipcRenderer} = require('electron')

const asyncMsgBtn = document.getElementById('game-msg')

asyncMsgBtn.addEventListener('click', () => {
  ipcRenderer.send('game-message', 'ping')
})

ipcRenderer.on('game-reply', (event, arg) => {
  const message = `Asynchronous message reply: ${arg}`
  document.getElementById('game-reply').innerHTML = message
})
