const {ipcMain} = require('electron')
const { Pack, Hand } = require('tx-holdem');

const Game = {
    pack: null,
    seats: [],
    players: [],
    history: [],
}

class Round {
    dealer = null
    bigBlind = null
    smallBlind = null
    pot = 0

    __constructor(...args) {
        args.map(a => this[a] = a)
    }
}

class Player {

    __constructor() {
        console.log('here')
    }
}


ipcMain.on('start-game-msg', (event, arg) => {
    const { players } = JSON.parse(arg)
    Game.pack = new Pack();

    Game.round = new Round()
    Array(parseInt(players)).fill(1).map(() => Game.players.push(new Player()))
    event.sender.send('start-game-reply', 'New Game Has Been Started...')
})
  


ipcMain.on('deal-msg', (event, arg) => {
  
    const pairHand = new Hand(
        Game.pack.createCard('clubs', 3),
        Game.pack.createCard('diamonds', 3)
    );

    const fourOfAKindHand = new Hand(
        Game.pack.createCard('clubs', 4),
        Game.pack.createCard('diamonds', 4),
        Game.pack.createCard('hearts', 4),
        Game.pack.createCard('spades', 4),
    );

    console.log('vscode')

    const pairIsLower = pairHand.compare(fourOfAKindHand) === -1;
    event.sender.send('deal-reply', `Pair is lower: ${pairIsLower}`)

})

