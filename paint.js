let brushSize = 50;
let brushColor = 0;
let brushShape = 0;

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255)
}

function draw() {
    if (brushShape == 0) {
        fill(brushColor);
        noStroke();
        ellipse(mouseX, mouseY, brushSize, brushSize);
    }

    else if(brushShape == 1) {
        fill(brushColor);
        noStroke();
        square(mouseX, mouseY, brushSize);    
    }

    else if(brushShape == 2) {
        stroke(brushColor);
        noFill();
        ellipse(mouseX, mouseY, brushSize, brushSize);    
    }

    else {
        stroke(brushColor);
        noFill();
        square(mouseX, mouseY, brushSize);    
    }
}

function mousePressed(){
    brushShape += 1;
    if (brushShape > 3) {
        brushShape = 0;
    }
}

function keyPressed() {
    if(keyCode == UP_ARROW) {
        brushSize += 1;
    }

    else if (keyCode == DOWN_ARROW) {
        brushSize += -1;
    }
}

function keyIsDown () {
    if (keyIsDown(UP_ARROW)) {
        brushSize += 5;
      }

    if (keyIsDown(DOWN_ARROW)) {
        brushSize += 5;
      }
}