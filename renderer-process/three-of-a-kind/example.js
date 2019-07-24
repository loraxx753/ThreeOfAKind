const {ipcRenderer} = require('electron')

const asyncMsgBtn = document.getElementById('start-game-msg')
const asyncMsgBtn2 = document.getElementById('deal-msg')

// New Message Here

asyncMsgBtn.addEventListener('click', () => {
  ipcRenderer.send('start-game-msg', JSON.stringify({players:`${document.getElementById('current-players').value}`}))
})
asyncMsgBtn2.addEventListener('click', () => {
  ipcRenderer.send('deal-msg', 'ping')
})

ipcRenderer.on('start-game-reply', (event, arg) => {
  const message = `Asynchronous message reply: ${arg}`
  document.getElementById('start-game-reply').innerHTML = message
})

ipcRenderer.on('deal-reply', (event, arg) => {
  const message = `Asynchronous message reply: ${arg}`
  document.getElementById('deal-reply').innerHTML = message
})
