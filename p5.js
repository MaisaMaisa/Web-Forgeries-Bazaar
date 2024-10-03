let xoff = 1;
let r = 50;
let bubbleX;


function setup() {
    createCanvas(windowWidth, windowHeight);

    // cnv.mouseOver(doubleClicked);
    // let a = createA('http://p5js.org/', 'p5*js');
    // a.position(25, 35);
    // a.hide();
}

function draw() {
    background(100, 10);

    //for every x do the y
    for (x = 20; x <= width; x = x + 50){
        for (y = 20; y <=height; y = y + 50){
            ellipse (x, y, 20, 20);
        }
    }

    bubbleX = map(noise(xoff), 0, 1, 0, width);
    xoff += 0.01;
    ellipse(bubbleX, 200, r * 2);
}

// function doubleClicked() {
//     p.show();
//   }
function mousePressed() {
    let d = dist(mouseX, mouseY, bubbleX, 200);
    if (d < r) {
      console.log('clicked on bubble');
    }
  }