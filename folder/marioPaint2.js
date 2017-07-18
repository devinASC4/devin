function setup(){
    createCanvas(700,500);
    
}

var words = "They told him don't you ever come around here want to see your face you better disappear";

var newWords= words.split(" ");
console.log (newWords);



	
var x = 200;
function draw(){
    background(150);
    textSize(32);
text("Pleasetype the sentence below", x, 30);
fill(0, 102, 153);
text("do a flip", x, 60);
fill(0, 102, 153, 51);
text("Current Points", x, 90);
    
    //ellipse(x, 200, 16, 16);
    x++;
 // s = "The quick brown fox jumped over the lazy dog.";
//fill(50);
//text(s, 10, 10, 70, 80);
}