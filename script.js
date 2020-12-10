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
    var upperCaseConfirm =  confirm("Would you like to use capital letters?");
    var lowerCaseConfirm = confirm("Would you like to use lowercase letters?");
    var numConfirm = confirm ("Would you like to use numbers?")
    var spxCharConfirm = confirm ("Would you like to use special characters?")
    var upperCase = ["A B C D E F G H I K L M N O P Q R S T V X Y Z"]
    var lowerCase = ["a b c d e f g h i j k l m n o p q r s t u v w x z"]
    var numbers = [0123456789]
    var spxChar = ["!#$%&()*+-./:;<=>?@[\]^_{|}~"]
    var finalArray = ''
    confirm("Would you like to use uppercase letters?")
        if (upperCaseConfirm ===true) {
        finalArray = finalArray + upperCase
        }
    
    confirm("Would you like to use lowercase letters?")
        if (lowerCaseConfirm===true){
            finalArray = finalArray + lowerCase
        }
    confirm("Would you like to use numbers?")
        if (numConfirm===true){
            finalArray = finalArray + numbers
        }
    confirm ("Would you like to use special characters?")
}
// TODO: Create confirms for uppercase, lowercase, numbers, and special characters.
// TODO: Prompt user to ask how many chars they want (8-128)
// TODO: Create conditional to make sure user has chosen at least one type of char
// TODO: create array of letters, numbers and special characters
// TODO: create an empty array to hold user choices
// TODO: create if/else staements that checks the confirms by the user and based on response push those characters to empty array
// TODO: Create "for" loop to loop over final Array. It should run based on user prompt (How many characters?)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
