
// var firstName = prompt("Enter your firstName");
// var lastName = prompt("Enter your LastName");
// var fullName = firstName +" "+ lastName;
// alert("Hello, " +fullName+ "!");


// var userPhoneDetail = prompt("favourite mobile phone model")
// var inputLength = userPhoneDetail.length;
// alert("The length is your input is" +" " +inputLength);

// var word = "Pakistani";
// var wordLength = word.length;
// alert("Word length is " + wordLength);


// var word1 = "Hello World";
// var letterL = word1.letter('l');
// alert("The last index of letter “l” in the word “Hello World” is" + letter);

// var index = "Pakistani"
// Var AtThirdIndex = index.AtIndex('3');
// alert("The character at 3rd index in the word “Pakistani” is" + AtThirdIndex);

var word = "Hyderabad";
var newword = word.replace("Hyder","Islam");
alert("The new word is: " + newword);

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newmessage = message.replace(/and/g, "&");
alert("The new message is: " + newmessage );

var str = "472";
var num = Number(str);
alert("The value is: " + str + " and type is: "+ typeof str);
alert("The value is: " + num + " and type is: "+ typeof num);

var userInput = prompt("Please enter some text:");
var uppercase = userInput.toUpperCase();
alert("The input in capital letters is. " + uppercase);

var num = 35.36;
var numString = num.toString();
var result= numString.replace(".","");
alert("After removing. "+result);


function hasSpecialCharacter(username) {
var specialCharacter = ['@',',','!'];
for (var i = 0; i < username.length; i++) {
    if (specialCharacter.indexOf(username[i]) != -1) {
        return true;
}
return false;
}
function getUsername() {
    var username
    while (true) {
        username = prompt("Enter your username");
        if (hasSpecialCharacter(username)) {
            break;
    } else {
        alert("Username should have at least one special character");
    }
}
return username;
}
}

let A = ["cake", "apple pie", "cookie", "chips", "patties"];


function searchItem(item) {
    
    let lowerCaseItem = item.toLowerCase();
    
    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === lowerCaseItem) {
            return true;
        }
    }
    return false;
}


let userInput = prompt("Enter an item to search:");


if (searchItem(userInput)) {
    alert(userInput + " is available in the list.");
} else {
    alert(userInput + " is not available in the list.");
}


function isValidPassword(password) {

    if (password.length < 6) {
        return false;
    }

    if (!isNaN(password.charAt(0))) {
        return false;
    }

    let hasAlphabet = false;
    let hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true; // A-Z or a-z
        } else if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }

        if (hasAlphabet && hasNumber) {
            return true;
        }
    }   

    return false;
}

function getPassword() {
    while (true) {
        var password = prompt("Enter your password:");
        if (isValidPassword(password)) {
            return password;
        } else {
            alert("Invalid password. It must contain both alphabets and numbers, must be at least 6 characters long, and should not start with a number.");
        }
    }
}

var password = getPassword();
console.log("Your password is:", password);


var university = "University of Karachi";

var universityArray = university.split(" ");


for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

var userInput = prompt("Enter a word:");

var lastCharacter = userInput.charAt(userInput.length - 1);


document.write("User input: " + userInput + "<br>");
document.write("Last character of input: " + lastCharacter);


var sentence = "The quick brown fox jumps over the lazy dog";


var lowerCaseSentence = sentence.toLowerCase();


var wordsArray = lowerCaseSentence.split(" ");


var count = 0;


for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "the") {
        count++;
    }
}


document.write('The word "the" occurs ' + count + ' times in the given string.');
