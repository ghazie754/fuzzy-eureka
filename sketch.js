let Shaderfile;
let frameCount = 60;
let c = frameCount % 255;
let position = 0;
let Canvas;

function preload() {
  Shaderfile = loadShader("Shaders/shader.vert", "Shaders/shader.frag");
}
function setup() {
  Canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  Shaderfile.setUniform("resolution", [width, height]);
  noStroke();
}
function draw() {
  let mx = map(mouseX, 0, width, 0, 1);
  let my = map(mouseY, 0, height, 0, 1);

  // lets send the time and resolution to our shader

  Shaderfile.setUniform("time", frameCount * 0.1);
  Shaderfile.setUniform("mouse", [mx, my]);
  // shader() sets the active shader with our shader
  shader(Shaderfile);

  // rect gives us some geometry on the screen
  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
function doubleClicked() {
  saveCanvas(Canvas, "jpg");
}
function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 5);
  }
  function keyPressed() {
    if (key === "r") {
      clear();
    }
  }
}
