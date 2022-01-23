// prompt for password; needs x - length - between 8-128, include x - lowercase , x- uppercase, x - numeric, and/or x - special characters. 
// Assignment Code
var passwordLength;
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericSigns = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@^_`{|}~";
var generateBtn = document.querySelector("#generate");


// This function will determine the password length.
//intial prompt
function keyLength () { 
  passwordLength = prompt("How many characters does your password need to be? The length of the password can be between 8-128 characters");

  //prompt if less than 8
  if (passwordLength<8){  
    alert("You need at least 8 characters to have a secure password. Let's try this again...");
    keyLength();
  
    //prompt if greater than 128 
  }else if (passwordLength>128){ 
    alert ("Do you really need a password past 129 characters? Reel it back down to 128" );
    keyLength();
    
    //prompt if anything entered is not a number
  }else if (isNaN(passwordLength)){ 
    alert ("Forget to enter a number? Need to know that before I can generate a password.");
    keyLength ();

    //supporting prompts for the next series of questions
  }else{ 
    alert("Please answer the following questions so a secure password can be generated for you.");
  }
  return passwordLength;
}

// This function will confirm if uppercase letters are needed
//initial prompt 
function uppercaseNeeded() { 
  uppercaseConfirm = prompt("Are uppercase letters required for your password?\n (Y / N)");
  // prompt if text field is blank  
  if (uppercaseConfirm === null || uppercaseConfirm === ""){ 
      alert("Choose Y or N"); 
      uppercaseNeeded;

      // allows for variations of Y to be accepted as a response
    }else if (uppercaseConfirm === "Y" || uppercaseConfirm === "y"){
        uppercaseConfirm = true;
        return uppercaseConfirm

        // allows for variations of N to be accepted as a response
    }else if (uppercaseConfirm === "N" || uppercaseConfirm === "n"){ 
        uppercaseConfirm = false;

        //determines if uppercase letters are needed
    }else {
        alert("Y or N");
        uppercaseNeeded ()
      }
      return uppercaseConfirm;
}

// This function will determine if numbers are needed
// initial prompt
function numericNeeded () { 
  numericConfirm = prompt("Are numbers required for your password?\n (Y / N)");
   //prompt if text field is blank  
  if (numericConfirm === null || numericConfirm === " " ) { 
      alert("Choose Y or N");
      numericNeeded;
  
      // allows for variations of Y to be accepted as a response
    }else if (numericConfirm === "Y" || numericConfirm === "y" ){
      numericConfirm = true;
      return numericConfirm

      // allows for variations of N to be accepted as a response
    }else if (numericConfirm === "N" || numericConfirm === "n" ){
      numericConfirm = false;

      //determines if numbers are needed
    } else {
      alert("Y or N");
      numericNeeded ()
    }
    return numericConfirm;
}

 // initial prompt
function specialNeeded () {
  specialConfirm = prompt("Are special characters required for your password?\n (Y / N)");
  //prompt if text field is blank  
  if (specialConfirm === null || specialConfirm === " " ) {  
      alert("Choose Y or N");
      numericNeeded;
  
      // allows for variations of Y to be accepted as a response
    }else if (specialConfirm === "Y" || specialConfirm === "y" ){
      numericConfirm = true;
      return numericConfirm

      // allows for variations of N to be accepted as a response
    }else if (specialConfirm === "N" || specialConfirm === "n" ){
      numericConfirm = false;

      //determines if special characters are needed
    } else {
      alert("Y or N");
      specialNeeded ()
    }
    return specialConfirm;
}

function generatePassword() {
  keyLength;
  console.log(passwordLength);
  uppercaseNeeded;
  console.log(uppercaseConfirm);
  numericNeeded;
  console.log(numericConfirm);
  specialNeeded;
  console.log(specialConfirm)
  }

  // Password formula
if (uppercaseNeeded && numericNeeded && specialNeeded){ // password generated with letters (upper & lower), numbers, and special letters of the password
  lowercaseLetters += uppercaseLetters + numericSigns + specialCharacters;
  
}else if(uppercaseNeeded && numericNeeded) // password generated for  only letter (upper & lowers) and numbers
  {lowercaseLetters += uppercaseLetters + numericSigns;

}else if(uppercaseNeeded && specialNeeded) //password generated for only letter (upper & lowers) and special characters
  {lowercaseLetters += uppercaseLetters = specialCharacters;

}else if (specialNeeded && numericNeeded)  //password generated for only special characters and numbers 
  {specialCharacters && numericSigns;

}else if(uppercaseNeeded)  //password with only letters
  {lowercaseLetters += uppercaseLetters;

}else if(numericNeeded) // password with only lowercase letters & numbers
  {lowercaseLetters += numericSigns;

}else if(specialNeeded)  //password with only lowercase and special characters
  {lowercaseLetters += specialCharacters;

  var lowercaseNeeded

}else if(lowercaseNeeded)  //password if only lowercase letters are needed
  {lowercaseNeeded === lowercaseLetters;

    for(var i=0; i < passwordLength; i++){
      
    }
}



//   return String.charAt (Math.floor(Math.random() * specialCharacters.length);
// }

var password
// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
//  console.log(writePassword);