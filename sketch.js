let canvas;

let p = [];

function setup() {
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.class('canvas');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if(frameCount % 2 == 0){
		p[0] = new ranPoint(0);
		p[1] = new ranPoint(1);

		let xx = (p[0].ranX+p[1].ranX)/2;
		let yy = (p[0].ranY+p[1].ranY)/2;
		let d = 5;

		noFill();
		stroke(0, 255, 0);
		strokeWeight(15);

		beginShape();
			curveVertex(p[0].ranX, p[0].ranY);
			curveVertex(p[0].ranX, p[0].ranY);

			curveVertex(xx + random(-2*xx/d, xx/d), yy + random(-2*yy/d, yy/d));
			
			curveVertex(p[1].ranX, p[1].ranY);
			curveVertex(p[1].ranX, p[1].ranY);
		endShape();
	}
}

function ranPoint(i) {
	this.ranY = random(0, height);
	this.ranX = random(i*width/2, (i+1)*width/2);
}
