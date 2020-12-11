// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Created a generate password function
// TODO: Write all logic within this function
function generatePassword(){ 
    // bank of arrays for password characters
    var upperCase = "ABCDEFGHIKLMNOPQRSTVXYZ"
    var lowerCase = "abcdefghijklmnopqrstuvwxz"
    var numbers = "1234567890"
    var spxChar = "!#$%&?@^"
    // final accumulated array and final password with random number
    var finalArray = ''
    var finalPass = ''
// begin user input chain
var charCount = prompt("How many characters do you want your password to be? (Must be between 8-128 characters)")
        while (charCount<8 || charCount>128){
            alert("You chose poorly. Please enter a valid choice.")
            charCount = prompt("How many characters do you want your password to be? (Must be between 8-128 characters)")
        }
         
        var upperCaseConfirm =  confirm("Would you like to use capital letters?");
        if (upperCaseConfirm ===true) {
        finalArray = finalArray + upperCase
        console.log(finalArray)
        }
    
        var lowerCaseConfirm = confirm("Would you like to use lowercase letters?");
        if (lowerCaseConfirm===true){
            finalArray += lowerCase
            console.log(finalArray)
        }
        var numConfirm = confirm ("Would you like to use numbers?");
        if (numConfirm===true){
            finalArray += numbers
            console.log(finalArray)
        }
        var spxCharConfirm = confirm ("Would you like to use special characters?");
       if (spxCharConfirm===true){
           finalArray += spxChar
           console.log(finalArray)
       }
    
    for (var i = 0; i <charCount; i++) {
        var randomNum = Math.floor(Math.random()*finalArray.length)
           finalPass += finalArray[randomNum]
           console.log(finalArray)
        }
    return finalPass
}
// Created confirms for uppercase, lowercase, numbers, and special characters.
// Prompt user to ask how many chars they want (8-128)
// Created conditional to make sure user has chosen at least one type of char
// created array of letters, numbers and special characters
// created an empty array to hold user choices
// created if/else staements that checks the confirms by the user and based on response push those characters to empty array
// Created "for" loop to loop over final Array. It should run based on user prompt (How many characters?)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
