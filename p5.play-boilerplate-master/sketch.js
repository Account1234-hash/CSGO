var engine, world;
var speed, weight;
var car, wall;


function setup() {
    createCanvas(windowWidth,windowHeight);
    speed = random(44, 90);
    weight = random(400, 1500);
    car = createSprite(windowWidth/4, windowHeight/2, 50, 50);
    wall = createSprite(windowWidth / 1, windowHeight / 2, 250, windowHeight * 2);
    car.velocityX = speed;
    wall.shapeColor = color(64,36,59);
}

function draw() {
  background(216,201,155);  
   
    if (car.isTouching(wall)) {
        car.velocityX = 0;
       
        var deform = 0.5 * speed * weight * speed / 22500;
        if (deform > 180) {
            car.shapeColor = color(99, 29, 7);
            textSize(30);
            fill(0);
            text("This Car is Dangerous!", windowWidth / 2, windowHeight / 2);
        }
        if (deform < 180 && deform > 100 ) {
            car.shapeColor = color(179, 191, 6);
            textSize(30);
            fill(0);
            text("This Car is okay.", windowWidth / 2, windowHeight / 2);
        }
        if (deform < 100) {
            car.shapeColor = color(0, 199, 3);
            textSize(30);
            fill(0);
            text("This Car is very Safe!", windowWidth / 2, windowHeight / 2);
        }
       
    }
    drawSprites();
}