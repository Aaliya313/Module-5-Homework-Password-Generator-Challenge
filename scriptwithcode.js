// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Declaring variables as global
var passwordLengthinput;
var lowerCaseBoolean;
var upperCaseBoolean;
var numericBool;
var specialCharactersBool;
var randomItem;
var newPasswordArray = [];

// FUNCTION 1: Function to prompt user for password options
function getPasswordOptions() {
// Password Options

passwordLengthinput = prompt("How many characters do you want in the password");

//Validating the number of characters
while (passwordLengthinput < 10 || passwordLengthinput > 64) {
  alert("Password has to be 10-64 characters long"); 
  passwordLengthinput = prompt("How many characters do you want in the password");
}

//Password options 
lowerCaseBoolean = confirm("Do you want lowercase values in your password?");
upperCaseBoolean = confirm("Do you want uppercase values in your password?");
numericBool = confirm("Do you want numeric values in your password?");
specialCharactersBool = confirm("Do you want special character values in your password?");

//If no password option is selected prompts user to re-select at least one  
 while ((lowerCaseBoolean || upperCaseBoolean || numericBool || specialCharactersBool) === false) { 
  confirm("Please select at least one character statement"); 
  lowerCaseBoolean = confirm("Do you want lowercase values in your password?");
  upperCaseBoolean = confirm("Do you want uppercase values in your password?");
  numericBool = confirm("Do you want numeric values in your password?");
  specialCharactersBool = confirm("Do you want special character values in your password?");
 }
}
 getPasswordOptions();
 

// FUNCTION 2: Function for getting a random element from an array
function getRandom(Array) {
//Stores random value from the array in a variable
 var randomItem = Array[Math.floor(Math.random()*Array.length)];
 return randomItem;
}



// FUNCTION 3: Function to generate password with user input
function generatePassword() {
    //Using a for loop to iterate through the user input for passwordLengthinput 
    //Using if statements to say if user has selected a password option, put that into a new second array and randomly generate a character from the specified array
    var passwordoptions = [];
    if (upperCaseBoolean === true) {
        passwordoptions.push(...upperCasedCharacters);
        newPasswordArray.push(getRandom(upperCasedCharacters));
    }
    if (lowerCaseBoolean === true) {
      passwordoptions.push(...lowerCasedCharacters);
      newPasswordArray.push(getRandom(lowerCasedCharacters));
    }
    if (numericBool === true) {
      passwordoptions.push(...numericCharacters);
      newPasswordArray.push(getRandom(numericCharacters));
    }
    if (specialCharactersBool === true) {
    passwordoptions.push(...specialCharacters);
    newPasswordArray.push(getRandom(specialCharacters));
    }

    
    for(i = newPasswordArray.length; i < passwordLengthinput; i++) {
      newPasswordArray.push(getRandom(passwordoptions));
    }
  }
  //Testing to see if the function works and will output the new second array 
  generatePassword();
 


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');

  passwordText.value = newPasswordArray.join('');
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);