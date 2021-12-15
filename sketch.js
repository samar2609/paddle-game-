var bgImg;
var paddle;
var fruit, fruitImg;
var leave,leaveImg;
var gameState = "play"
var edges;
var leaves 
var score = 0 



function preload(){
leaveImg = loadImage("maple leaves.webp")
fruitImg = loadImage("fruit2.png")
bgImg = loadImage("jungle background.jpeg")
}



function setup(){
createCanvas(windowWidth, windowHeight);

fruit = createSprite(550,670)
fruit.addImage('apple',fruitImg)
fruit.scale = 0.18


paddle = createSprite(650,689,150,10)
paddle.shapeColor = 'red'

edges = createEdgeSprites()

leaves = new Group();

for(i = 0; i<10;i++){
leave = createSprite(130+130*i,100,100,100)
leave.addImage('bush',leaveImg)
leave.scale = 0.06
leaves.add(leave)
}

for(i = 0; i<10;i++){
    leave = createSprite(130+130*i,100+100,100,100)
    leave.addImage('bush',leaveImg)
    leave.scale = 0.06
    leaves.add(leave)

    }

    for(i = 0; i<10;i++){
        leave = createSprite(130+130*i,100+100+100,100,100)
        leave.addImage('bush',leaveImg)
        leave.scale = 0.06
        leaves.add(leave)

        }

        for(i = 0; i<10;i++){
            leave = createSprite(130+130*i,100+100+100+100,100,100)
            leave.addImage('bush',leaveImg)
            leave.scale = 0.06
            leaves.add(leave)
            }      
}


function draw(){
background('black')
image(bgImg,0,0,1500,900)

fruit.bounceOff(edges)
fruit.bounceOff(leaves,destroyLeaves)

if(gameState === "play"){

paddle.x = World.mouseX;

if(leave.destroy()){
score = score +2
}


if(fruit.isTouching(paddle)){
fruit.velocityY = -3
fruit.velocityX = -4
}

drawSprites();

fill('blue')
textSize(20)
text("Score:"+score,windowWidth -200, windowHeight - 750)
}
}

function destroyLeaves(fruit,leave){
leave.destroy();
score = score+2
}