function Pokemon(name, health, move1, move2, move3, move4){
    this.name = name
    this.health = health;
    this.moves = [move1,move2,move3,move4];
}

var Pikachu = new Pokemon ("Pikachu","35","Rko","Rape","Tackle","Punch");

function keyTyped(){
	switch(key){
    case "q":
      console.log(pikachu.moves[0]);
    case "w":
      console.log(pikachu.moves[1]);
    case "e":
      console.log(pikachu.moves[2]);
    case "r":
      console.log(pikachu.moves[3]);
    default:
      console.log("NOT A KEY");
  }





