function setup(){
  createCanvas(700,500);
     }

 var words = "They told him don't you ever come around here want to see your face you better disappear";

 var newWords= words.split(" ");
 
 



//  var score = 0;   // tihis is wrong
//  keyPressed(words) = true;
//  if {keyPressed(words) = true
//  }
//  if else {keyPressed(words) = false;
//  }
  //score ++

function keyTyped(){
    if (key === "a") {
        value = "a";
    }
}

 var i = 0;

console.log(words);

var x = 200;
function draw(){
    background(150);
    textSize(32);
text(newWords[i], x, 30);
fill(0, 102, 153);

    
    //ellipse(x, 200, 16, 16);
    x++;
 // s = "The quick brown fox jumped over the lazy dog.";
//fill(50);
//text(s, 10, 10, 70, 80);
}