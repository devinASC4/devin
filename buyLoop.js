var prompt = require('prompt-sync')();

//get input from the user.

//var n = prompt('How many more times? ');

var wallet = 1000;
var store = ["sword", "food"];
var prices = [500, 100];
var inventory = [];

while(wallet>0){
    var purchaseChoice = prompt("what're you buyin'");
    if purchaseChoice == store[0] && wallet >= prices[0]{
    wallet = wallet - prices[0];
    invetory.push("sword");
    else if (purchaseChoice == store[1]) && wallet >= prices[1]{
    wallet = wallet - prices[1];
    invetory.push("food");

    }
    else if (purchaseChoice == "quit"){
    // purchase.ecit()
    wallet = 0;
    }
    else{
    console.log("GAME OVER");
    }

    console.log(invetory)
]