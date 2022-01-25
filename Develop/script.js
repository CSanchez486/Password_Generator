// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompt for password; needs x - length - between 8-128, include x - lowercase , x- uppercase, x - numeric, and/or x - special characters. 
var lowercaseLetters = ["a", "b","c", "d", "e", "f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericSigns = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];

// Variables for checkP function
var hasUCL;
var hasLCL;
var hasSC;
var hasNS;

//Checks that password has correct character types 
function checkP () {
  hasUCL = window.confirm("Cancel means No, OK means OK - click away!");
  hasLCL = window.confirm("Cancel means No, OK means OK - click away!");
  hasSC = window.confirm("Cancel means No, OK means OK - click away!");
  hasNS = window.confirm("Cancel means No, OK means OK - click away!");
}


// This function will determine the password length.
// initial prompt
function generatePassword() { 
  var password = [];
  var passwordLength = prompt("How many characters does your password need to be? The length of the password can be between 8-128 characters");

  //prompt if cancel is clicked - exits the generator
  if (passwordLength === null)  { 
    alert("You need at least 8 characters to have a secure password. Let's try this again...");
    return;
  
    //prompt if nothing is entered
  }else if (!passwordLength){ 
    alert ("Forget to enter a number? Need to know that before I can generate a password." );
    return;
    
    //prompt if anything 
  }else if (passwordLength < 8 || passwordLength > 128) { 
    alert ("Let's try this again - pick a number between 8 & 128, I believe in you");
    return;

    //supporting prompts for the next series of questions
  }else if (lowercaseLetters.includes(passwordLength) || uppercaseLetters || specialCharacters) 
    alert("You need to enter a number...");
    return;

    //checks that response works for numbers chosen 
  } 
    checkP();
  // console.log(keyLength)

  
//randomized characters will be placed in empty array
var randomC = [];
//count starts at 0
var start = 0;

//variables for if statements that will generate password
var randomUCL;
var randomLCL;
var randomSC;
var randomNS;

//random variable wo;; get pushed up to the array
if(randomUCL) {
  start ++;
  uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  randomC.push(randomUCL);
  password.push(...uppercaseLetters);
}

if(randomLCL) {
  start ++;
  lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  randomC.push(randomLCL);
  password.push(...lowercaseLetters);
}

if(randomSC) {
  start ++;
  specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  randomC.push(randomSC);
  password.push(...randomSC);
}

if(randomNS) {
  start ++;
  numericSigns[Math.floor(Math.random() * numericSigns.length)];
  randomC.push(randomNS);
  password.push(...numericSigns);
}

// Alert when no choices were made for password criteria
// if (!include(hasUCL) && !include(hasLCL) && !includes(hasNS) && !includes(hasSC));{
//   alert ("Choices need to be made for me to generate a password...");
// };

//formula for randomizing the array 
for(var i = 0; i < passwordLength; i++) {
  //random password generated based on length
  var randomLength = password[Math.floor(Math.random() * password.length)]; 
  //array will push characters that meet criteria up to random
  randomC.push(random);
}

  // return randomC.join('');




// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password"); passwordText.value = password; }; 

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); 
//  console.log(writePassword); 

//NOTES - LINE 102 uncaught reference error for passwordlength is not defined // prompt not generating correct thing