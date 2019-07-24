const {ipcMain} = require('electron')

ipcMain.on('hand-message', (event, arg) => {
  event.sender.send('hand-reply', 'pong')
})
