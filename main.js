// Email
// Fare la lista(array) di varie mail
var emailList = ["dora@gmail.com", "luca@live.it", "marco@yahoo.com"];

// Chiedere all'utente la mail
var email = prompt("Write your email adress:")

// Controllare se la mail sia sulla lista (for, if)
var flag = false;

for (var i = 0; i < emailList.length; i++) {
  if (emailList[i] == email) {
    flag = true;
  }
}

if (flag) {
  document.getElementById('message').innerHTML = "You are on the list - access granted";
} else {
  document.getElementById('message').innerHTML = "You are not on the list - access denied";
}


// Dadi
var player = prompt("What is your name?")

// Generare 2 numeri a caso tra 1 e 6
var diceNumber = [];
for (var i = 0; i < 5; i++) {
  var number = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  diceNumber.push(number);
}

document.getElementById('number1').innerHTML = player + "'s number: " + diceNumber[0];
document.getElementById('number2').innerHTML = "Computer's number: " + diceNumber[1];

// Controllare quale numero sia piu grande
if (diceNumber[0] > diceNumber[1]) {
  document.getElementById('winner').innerHTML = player + " has won!";
} else if (diceNumber[0] == diceNumber[1]) {
  document.getElementById('winner').innerHTML = "Nobody won because numbers have the same value!";
} else {
  document.getElementById('winner').innerHTML = "Computer has won!";
}
