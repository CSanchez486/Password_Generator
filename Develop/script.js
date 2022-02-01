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
  hasUCL = window.confirm("UCL!");
  hasLCL = window.confirm("LCL");
  hasSC = window.confirm("SC!");
  hasNS = window.confirm("NS!");
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
  }else if (lowercaseLetters.includes(passwordLength) || uppercaseLetters.includes(passwordLength) || specialCharacters.includes(passwordLength)) {
    alert("You need to enter a number...");
    return;

  // if any else conditions are triggered then checkP is prompted to confirm the response again
}else {
 checkP();
}};
  
  // console.log(keyLength)

  
//randomized characters will be placed in empty array
var randomPassword = [];
//count starts at 0
var start = 0;

//variables for if statements that will generate password
var randomUCL;
var randomLCL;
var randomSC;
var randomNS;

//If one character is selected then at least one character will be in the password
if(hasUCL) {
  start ++;
  randomUCL = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  randomPassword.push(randomUCL);
  // pushes the character type into the password array
  password.push(...uppercaseLetters);
}

if(hasLCL) {
  start ++;
  randomLCL = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  randomPassword.push(randomLCL);
  password.push(...lowercaseLetters);
}

if(hasSC) {
  start ++;
  randomSC = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  randomPassword.push(randomSC);
  password.push(...randomSC);
}

if(hasNS) {
  start ++;
  randomNS = numericSigns[Math.floor(Math.random() * numericSigns.length)];
  randomPassword.push(randomNS);
  password.push(...numericSigns);
}

// Alert when no choices were made for password criteria
if (!hasUCL && !hasLCL && !hasNS && !hasSC);{
  alert ("Choices need to be made for me to generate a password...");
};

//formula for randomizing the array 
for(var i = 0; i < randomPassword.length; i++) {
  //random password generated based on length
  var randomLength = password[Math.floor(Math.random() * password.length)]; 
  //array will push characters that meet criteria up to random
  var randomPasswordNoSpace = randomPassword.join("");
}

  // return randomPasswordNoSpace;




// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password"); passwordText.value = password; 
}; 

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); 
//  console.log(writePassword); 
