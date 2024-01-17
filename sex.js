let sw,ss,r,g,b,x,y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    sw = random(4,16);
    ss = random(50,150);
    x = width/2;
    y = height/2;
    r = random(255);
    g = random(255);
    b = random(255);
    background(0)

}


function draw() {
    colorMode(RGB,255)
    rectMode(CENTER)
    strokeWeight(sw)
    stroke(r+=3,g+=2,b++,10)
    fill(random(255),random(255),random(255),random(1, 100))
    blendMode(HARD_LIGHT)
    rect(x,y,ss++,ss++)
}

function keyPressed() {
    if(keyCode == UP_ARROW) {
        y -= 10;
    }

    else if (keyCode == DOWN_ARROW) {
        y += 10;
    }
    
    else if (keyCode == LEFT_ARROW) {
        x -= 10;
    }

    else if (keyCode == RIGHT_ARROW) {
        x += 10;
    }

    else if (keyCode == ENTER) {
        background(0)
        ss,sw,r,g,b = 0
    }

    else {
        fill(0);
}
}

function mousePressed() {
    ss = 0;
    x = mouseX;
    y = mouseY;
    texting();
}

function texting(){
    textSize((x+y)/3);
    textAlign(CENTER, CENTER);
    fill(random(255), random(255), random(255),70);
    noStroke();
    text('sex', x, y);
}

