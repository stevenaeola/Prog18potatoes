
var falloff = 0;
var cloud;
var cloudWidth = 400;
var cloudHeight = 400;

function setup() {
    createCanvas(900, 900, WEBGL);
    cloud = createGraphics(cloudWidth, cloudHeight);
    background(0);
    noStroke();

}

function draw() {
    var width;
    noiseDetail(2,falloff);
    falloff *= 0.9;
    cloud.fill(0, 100);
    cloud.rect(0, 0, cloudWidth, cloudHeight);
    for (let x=0; x < cloudWidth; x+=40) {
	for (let y=0; y < cloudHeight; y+=40) {
	    let noiseVal = noise(x/300.0, y/300.0, millis()/2000.0);
	    cloud.fill(noiseVal*255);
	    cloud.ellipse (x, y, noiseVal*60, noiseVal*60);
	}
    }
    
    background(0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(cloud);
    box(400);
}

function mousePressed(){
  falloff = 1.0;
}
