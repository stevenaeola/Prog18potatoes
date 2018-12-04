var b;

function setup(){
    createCanvas(600,400);
    b = new Ball();
}

function draw(){
    b.draw();
}

document.addEventListener("DOMContentLoaded", function(){
    var cc = document.getElementById("colour");
    function changeColour(event){
	let colour = document.getElementById("colour").value;
	b.setColour(colour);
    }
    
    var r = document.getElementById("radius");
    function changeRadius(event){
	let radius = document.getElementById("radius").value;
	b.setRadius(radius);
    }
    
    cc.addEventListener("change", changeColour);
    r.addEventListener("radius", changeRadius);

    var cf = document.getElementById("colour_form");

    cf.addEventListener("submit", function (event){
	event.preventDefault()});
});


