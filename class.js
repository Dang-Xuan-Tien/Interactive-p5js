let bubble1;
let bubble2;
let t;
let currentIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  t = ['sex', 'ko sex', 'map mo', 'deo yeu', 'idol & fan', 'no le & ong chu', 'ngon co ven duong & may', 'ko la j cua nhau', 'fwb', 'ons', 'trash', 'married', 'loveydovey', 's🐸', 'ma 4 chan']
}

function draw() {
background(0);
fill(255)
noStroke()
textAlign(CENTER, CENTER)
textSize(50)
text('Think of someone & Hold the mouse to shuffle', windowWidth /2, 100)

text('relase it to see ur relationship status', windowWidth /2, 200)

bubble1 = new Bubble(mouseX - 100, mouseY, 10);
// bubble2 = new Bubble(mouseX * 2 , mouseY, 20);

  if(mouseIsPressed){
    bubble1.move();
    bubble1.show();
    // bubble2.move();
    // bubble2.show();
    changeText();
  } else {
    result();
  }
  
}

function result() {
    fill(255);
    noStroke();
    textSize(100);
    text(t[currentIndex], windowWidth / 2, windowHeight / 2);
}


function changeText() {
    currentIndex = (currentIndex + 1) % t.length;
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
    frameRate(15)
    fill(random(255), random(255), random(255))
    noStroke()
    textSize(100)
    text(t[currentIndex], mouseX + mouseX / 3, mouseY)
  }

}
