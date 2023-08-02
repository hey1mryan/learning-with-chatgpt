function setup() {
    createCanvas(500, 500);
    background(0);
    nostroke();

    let xPos = 0;
    let yPos = 0;
    let xSpeed = 1;
    let ySpeed = 4.5;


function draw() {
    background(0, 0, 0, 5);

    fill(255, 0, 255);
    ellipse(xPos, yPos, 30, 30);

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos < 15 || xPos > 485) {
        xSpeed *= -1;
    }
    if (yPos < 15 || yPos > 485) {
        ySpeed *= -1;
    }
}
}