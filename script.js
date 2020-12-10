// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// TODO: Create a generate password fucntion
// TODO: Write all logic within this function
function generatePassword(){

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
