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
    
    cc.addEventListener("change", changeColour);

    var cf = document.getElementById("colour_form");

    cf.addEventListener("submit", function (event){
	event.preventDefault()});
});


