const { ipcRenderer } = require('electron')

const asyncMsgBtn = document.getElementById('hand-msg')

asyncMsgBtn.addEventListener('click', () => {
  ipcRenderer.send('hand-message', 'ping')
})

ipcRenderer.on('hand-reply', (event, arg) => {
  const message = `Asynchronous message reply: ${arg}`
  document.getElementById('hand-reply').innerHTML = message
})
