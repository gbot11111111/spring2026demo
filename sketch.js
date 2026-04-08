function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('projectA');
  background(220);
}

function draw() {
  
  ellipse(mouseX,mouseY,50);
}
