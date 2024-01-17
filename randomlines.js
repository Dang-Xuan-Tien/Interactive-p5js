let spacing = 50;

let click = false;

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(12)
}

function mousePressed(){
  click = !click;
}

function draw() {
  if (click) {
    background(0);
    stroke(255);

    for(let x = 0; x < width; x += spacing) {
      for(let y = 0; y < height; y += spacing) {
        let sth = random(0, 1)

        if(sth < 0.5) {
          line(x, y, x + spacing, y + spacing)
        } else{
          line(x, y + spacing, x + spacing, y)
        } 
      }
    }
  }
}




