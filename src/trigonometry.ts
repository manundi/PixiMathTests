import * as PIXI from 'pixi.js'
import wheelImage from './assets/wheel.svg'

function lerp( a:number, b:number, alpha:number ) {
    return a + alpha * ( b - a )
   }
const screenWidth = window.innerWidth /2
const screenHeight = window.innerHeight /2

const win_sectors = [1,2,3,4,5,6,7,8,9,10,11,12]
let winSector = -15

// define basic settings of html canvas. Sizer bg color etc.
const game = new PIXI.Application<any>({
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
});

console.log(wheelImage)
let wheel : PIXI.Sprite 
 PIXI.Assets.load(wheelImage).then((resource) => {
    
    wheel = new PIXI.Sprite(resource)
    wheel.setTransform(screenWidth / 2, 150, 0.5, 0.5)
    wheel.anchor.x = 0.5
    wheel.anchor.y = 0.5
    game.stage.addChild(wheel)
    wheel.angle = 15
    const r = wheel.width /2
 

    game.ticker.add(GameLoop)
    game.ticker.start()
})

document.body.appendChild(game.view)

const slider = document.createElement('slider')
slider.innerHTML = `<div class="slidecontainer">
<input type="range" min="1" max="100" value="50" class="slider" id="myRange">
</div>`
document.body.appendChild(slider)
console.log(slider)


let newAngle : number = 0;
const GameLoop = () => {

    newAngle = lerp(wheel.angle, winSector,0.05)
    wheel.angle = newAngle

    
   // console.log(velocity)

  
}


