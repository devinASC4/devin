function setup(){
createCanvas(600, 600);
}

function draw(){
background(0);
ship = new Ship(width/2,height - 100, 1, 50, 50, [225,225,255]);
ship.show();
}

function Ship(x,y,xSpeed,w,h,color){
    this.xPos = x;
    this.yPos = y;
    this.xSpeed = xSpeed;
    this.width = w;
    this.height = h;
    this.color = color;

    this.show = function(){ // you can put a function in a class
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.xPos, this.yPos, this.width, this.height);
        
    }
 
   
}
console.log("LEFT");






function Alien(x,y,w,h,color){
    this.xPos = x;
    this.yPos = y;
    this.width = w;
    this.height = h;
    this.color = color;

    this.show = function(){ // you can put a function in a class
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.xPos, this.yPos, this.width, this.height);
}

}
