function setup() {
    createCanvas(500, 500);
    background(0);
    nostroke();

    let xPos = 15;
    let yPos = 15;
    let xSpeed = 1;
    let ySpeed = 4.5;


function draw() {
    background(0, 0, 0, 5);

    fill(255, 0, 255);
    ellipse(xPos, yPos, 30, 30);

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos < 25 || xPos > 475) {
        xSpeed *= -1;
    }
    if (yPos < 25 || yPos > 475) {
        ySpeed *= -1;
    }
}
}