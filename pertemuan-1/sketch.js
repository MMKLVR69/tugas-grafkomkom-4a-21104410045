function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0, 200, 450);

  // kepala
  fill(0, 250, 100);
  strokeWeight(2);
  stroke(0);
  ellipse(320, 320, 280, 250);

  // mata kiri
  fill(255);
  strokeWeight(2);
  stroke(0);
  ellipse(270, 210, 80, 80);
  fill(0);
  ellipse(270, 210, 40, 40);

  // mata kanan
  fill(255);
  strokeWeight(2);
  stroke(0);
  ellipse(370, 210, 80, 80);
  fill(0);
  ellipse(370, 210, 40, 40);

  // mulut
  fill(255, 102, 102);
  strokeWeight(2);
  stroke(1);
  arc(320, 320, 120, 120, 0, PI);

  // pipi kiri
  fill(255, 102, 102);
  noStroke();
  ellipse(240, 280, 60, 60);

  // pipi kanan
  fill(255, 102, 102);
  noStroke();
  ellipse(400, 280, 60, 60);
}
