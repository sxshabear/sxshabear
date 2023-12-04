let x, y;

let xPosition=300;
let xChange=5;


function setup(){
    let myCanvas=createCanvas(800,800);
    myCanvas.parent(myContainer);
    
    x = width / 2;
    y = height;
    
}

function draw(){
    background(189,213,255);


    let x1 = 10;
    let y1 = 50;
    let x2 = 90;
    let y2 = 50;

    line(x1, y1, x2, y2);
    strokeWeight(5);
    point(x1, y1);
    point(x2, y2);

    let d = dist(x1, y1, x2, y2);
    text(d, 43, 40);


    fill(252,3,73);
    stroke(252,255,255);
    quad(200,400,400,400,600,600,20,600);
    
    fill(189,255,201);
    noStroke();
    circle(x,y,100);
    x = x +random(-1,1);
    y = y - 1;
    if (y<0){
        y = height;
    }
    
    stroke(3,252,211);
    line(300,100,450,100);
    stroke(126);
    line(450,100,450,250);
    stroke(255);
    line(300,250,450,250);
    stroke(0);
    line(300,250,300,100);

    strokeWeight(2)
    fill(255,166,252)
    square(600, 40, 110, 40);
    
    let c = map(mouseX,0,width,255,0);
    fill(c);
    circle(50,200,20);

    fill(c);
    circle(50,100,20);

    
    let blueColor= random(50,100)
    noStroke();
    fill(blueColor);
    ellipse(xPosition,200,50);

    xPosition=xPosition+xChange;

    if (xPosition > width ||xPosition < 0) {
        xChange = xChange * -1;
    } 

    

    
}