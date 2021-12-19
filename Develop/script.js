// Assignment Code
var generateBtn = document.querySelector("#generate");



function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 
document.write("Random Number between 0 and 9: ") 
document.write( randomNumber(0, 9));


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 console.log(writePassword);
// pwCriteria = pwCriteria.toUpperCase("Do you need uppercase letters? Y or N");

var pwCriteria = function() {
  var pwUpper = window.prompt("Do you need upper case letters in your password? Y or N")
}

let pwUpper = "Y";
Boolean(pwUpper);

// // prompt for password; needs length - between 8-128, include lowercase, uppercase, numeric, and/or special characters. 

      // Doesn't work, but includes all potential characters
// function generatePassword() {
//   return String
//   var chars = [
//    "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // uppercase
//    "abcdefghijklmnopqrstuvwxyz", // lower case
//    "0123456789", // numbers
//    " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~", //special characters
//   ]}; 


// input is validated and at least one character should be selected.  when password id generated it ned to be in the pge


// Referenced: https://www.youtube.com/watch?v=duNmhKgtcsI - works, but only one digit
function generatePassword() {
  return String.fromCharCode (Math.floor(Math.random() *26) + 97);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}