import * as PIXI from 'pixi.js'
import wheelImage from './assets/wheel.svg'

function lerp( a:number, b:number, alpha:number ) {
    return a + alpha * ( b - a )
   }
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

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
    wheel.setTransform(screenWidth / 2, 250, 1, 1)
    wheel.anchor.x = 0.5
    wheel.anchor.y = 0.5
    game.stage.addChild(wheel)
    wheel.angle = 15
    const r = wheel.width /2
    win_sectors.map((s, i) =>{
        const text = new PIXI.Text(s.toString())
        text.anchor.x = 0.5
        text.anchor.y = 0.5
        text.style.fill = 'white'
        text.x = r * Math.cos((-75+i*30)*Math.PI/180)
        text.y = r * Math.sin((-75+i*30)*Math.PI/180)
        text.rotation = Math.atan2(text.y,text.x)
        text.angle+=90
        wheel.addChild(text)
    })

    game.ticker.add(GameLoop)
    game.ticker.start()
})

document.body.appendChild(game.view)


let newAngle : number = 0;
const GameLoop = () => {

    newAngle = lerp(wheel.angle, winSector,0.05)
    wheel.angle = newAngle

    
   // console.log(velocity)

  
}

const roll = () =>{
    const rndNum=Math.floor(Math.random()*win_sectors.length)
    console.log(rndNum)
    winSector = wheel.angle-360 -  (30 *rndNum)
    console.log('wheel angle now',wheel.angle)
    console.log('roll' , winSector)

}

document.addEventListener('click',() => roll())
document.addEventListener('keyup',() => roll())
