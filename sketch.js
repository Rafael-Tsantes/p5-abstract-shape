let a = 0;
let b = 0;
let c = 0;
let d = 0;

function setup() {
  createCanvas(550, 550);
  background(255);
}

function draw() {
  //Translate: position of starting point
  //Rotate: rotation of animation
  angleMode(DEGREES)
  translate(width / 2, height / 2);
  rotate(a);
  //Number of i is the number of dots (thickness of image)
  for (let i = 0; i < 5000; i++) {
    let x = sin(a*i)*tan(i)*c*sin(i);
    let y = cos(b)*sin(i)*a;
    let xx = asin(a*i)*atan(i)*c*asin(i);
    let yy = acos(b)*asin(i)*a;
    point(x, y);
    point(xx, yy);
  }

  a++;
  b--;
  c+=300;
  d+=500;
}
