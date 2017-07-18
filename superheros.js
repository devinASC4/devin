function Superhero (realName,power,justice,height) {
    this.realName = realName;
    this.superPower = power;
    this.justice = justice;// this a boolean
    this.height = height;

// this.fight = function () {
//     var num = Math.floor(Math.random()*100 ) ;
//     this.health = this.health - num;
//     //this.health -= num; // same thing just shorter
};

var superman = new Superhero ("Clark Kent","flying", true, "6'3" );

var batman = new Superhero ("Bruce Wayne","wealth", true, "6'2");

console.log(batman.realName);
