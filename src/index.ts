import * as PIXI from 'pixi.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight


// define basic settings of html canvas. Sizer bg color etc.
const game = new PIXI.Application<any>({
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
});

document.body.appendChild(game.view)

const wheel : PIXI.Sprite = PIXI.Assets.load('/wheel.svg').then((resource) => {
    return new PIXI.Sprite(resource)
    wheel.setTransform(screenWidth / 2 - 50, 50, 0.3, 0.3)
    game.stage.addChild(wheel);

})

const GameLoop = () => {
console.log('frame drawn')


}

game.ticker.add(GameLoop)
game.ticker.start()