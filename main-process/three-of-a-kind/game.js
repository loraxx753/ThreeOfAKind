const {ipcMain} = require('electron')
const { Pack, Hand } = require('tx-holdem');


ipcMain.on('game-message', (event, arg) => {
  const pack = new Pack();

  // const pairHand = new Hand(
  //   pack.createCard('clubs', 3),
  //   pack.createCard('diamonds', 3)
  // );
  // const fourOfAKindHand = new Hand(
  //   pack.createCard('clubs', 4),
  //   pack.createCard('diamonds', 4),
  //   pack.createCard('hearts', 4),
  //   pack.createCard('spades', 4),
  // );

  // const pairIsLower = pairHand.compare(fourOfAKindHand) === -1;

  event.sender.send('game-reply', 'pong')
})
