
var userInput = prompt("Enter a positive integer:");

var number = parseFloat(userInput);

if (number > 0) {
  
    var roundedValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);

    document.write("Number: " + number + "<br>");
    document.write("Round off value: " + roundedValue + "<br>");
    document.write("Floor value: " + floorValue + "<br>");
    document.write("Ceil value: " + ceilValue);
} else {
    document.write("Please enter a positive integer.");
}


var userInput = prompt("Enter a negative floating-point number:");

var number = parseFloat(userInput);


if (number < 0) {

    var roundedValue = Math.round(number);
    var floorValue = Math.floor(number);
    var ceilValue = Math.ceil(number);


    document.write("Number: " + number + "<br>");
    document.write("Round off value: " + roundedValue + "<br>");
    document.write("Floor value: " + floorValue + "<br>");
    document.write("Ceil value: " + ceilValue);
} else {
    document.write("Please enter a negative floating-point number.");
}


var userInput = prompt("Enter a number:");


var number = parseFloat(userInput);


var absoluteValue = Math.abs(number);


document.write("The absolute value of " + number + " is " + absoluteValue + ".");


function rollDice() {
   
    var diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue;
}
var diceResult = rollDice();
document.write("The value of the dice is: " + diceResult);

function tossCoin() {
    var randomValue = Math.random();
    
    if (randomValue < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}
var coinResult = tossCoin();

document.write("The result of the coin toss is: " + coinResult);

function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

var randomNumber = getRandomNumber();
document.write("The random number between 1 and 100 is: " + randomNumber);

function parseWeight(input) {
    var match = input.match(/([\d.]+)\s*(kg|kgs|kilograms)?/i);
    
    if (match) {
        return parseFloat(match[1]);
    } else {
        return "Invalid input. Please enter a valid weight.";
    }
}

var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

var weight = parseWeight(userInput);

document.write("Your weight is: " + weight + " kg");

function generateSecretNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

var secretNumber = generateSecretNumber();

var userInput = parseInt(prompt("Guess the secret number between 1 and 10:"), 10);

if (userInput >= 1 && userInput <= 10) {
    if (userInput === secretNumber) {
        document.write("Congratulations! You guessed the secret number: " + secretNumber + ".");
    } else {
        document.write("Sorry, the secret number was: " + secretNumber + ". Try again!");
    }
} else {
    document.write("Please enter a number between 1 and 10.");
}

