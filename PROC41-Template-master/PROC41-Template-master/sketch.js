const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boy;
var drops = [];
var thunder,thunder1, thunder2, thunder3, thunder4;

var world,engine;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(350, 700);
    engine = Engine.create();
    world = engine.world;

    boy = new Umbrella(175, 500);

    if(frameCount % 150 === 0){
        for(var i = 0; i<100; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background(0);
    
    thunder = createSprite(random(10,370),random(10,30),10,10);
    thunder.shapeColor = "black";
    var frameThunderCreated = frameCount;
    rand = Math.round(random(1,4));

    if(frameCount % 80 === 0){
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
        }
    }
    thunder.scale = random(0.3,0.6);

    if(frameThunderCreated + 10 === frameCount && thunder){
        thunder.destroy();
    }

    boy.display();

    for(var i = 0; i<100; i++){
        drops[i].update();
        drops[i].display();
    }

    drawSprites();
}