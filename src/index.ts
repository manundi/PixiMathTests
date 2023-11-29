import * as PIXI from 'pixi.js'
import { Text, Container } from 'pixi.js'

// define basic settings of html canvas. Sizer bg color etc.
const game = new PIXI.Application<any>({
    width: 800,
    height: 600,
    backgroundColor: 'white',
});

document.body.appendChild(game.view)

const GameLoop = () => {
console.log('frame drawn')

}

game.ticker.add(GameLoop)
game.ticker.start()