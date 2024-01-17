let spacing;
let click = false;

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(5)
}

function mousePressed(){
  click = !click;
}

function draw() {

    if (click) {
        background(0);
        noStroke();

        spacing = random(1, 500);

        for(let x = 0; x < width; x += spacing) {
        for(let y = 0; y < height; y += spacing) {
            
            let sth = random(0, 1)
            // let sth = 0;

            if(sth < 0.5) {

                let x2 = mouseX + x;
                let y2 = mouseY + y; 

                fill(random(255), random(255), random(255))
                circle(x2 + x / 2, y2 + y / 2 , spacing)
            } else{

                let x2 = windowWidth - mouseX;
                let y2 = windowHeight - mouseY; 
                
                rectMode(CENTER)
                fill(random(255), random(255), random(255))   
                square(-1 * x2 + x, -1 * y2 + y, spacing / (random(1, 2)))
            }
            
            if(spacing <= 250   ){
                spacing += 1;
            } else{
                spacing -= 1;
            }
        }
        }
    }
    
   
  }
