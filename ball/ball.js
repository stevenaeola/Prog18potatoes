class Ball{
    constructor(x, y, r, colour){
	this.x = x || 50;
	this.y = y || 50;
	this.radius = r || 20;;
	this.colour = colour || "red";
    }

    setColour(colour){
	this.colour = colour;
    }

    setRadius(radius){
	this.radius = radius;
    }
    
    draw(){
	fill(this.colour);
	ellipse(this.x, this.y,
		this.radius*2, this.radius*2);
    }
}


