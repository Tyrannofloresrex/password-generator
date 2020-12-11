# password-generator

This is an assignment about generating passwords.
WHen you click this "generate password button, guess what it should do?"
If you guessed, "generate a password" then this app is 4 U!


Password variables are gathered into arrays. There are four arrays: uppercase letters, lowercase letters, numbers and special characters.

Clicking the button tirggers alerts which asks the user what kind of characters they would like to use in their password. A prompt will ask the user how many characters they which to use. Then a series of confirms will allow the user to select the types of characters in the passwords. If confirmed true, characters will be collected into a new array. Characters confirmed false are not included into the new array.

Once collected in the new array, the user's character amount and a random index generator are used to decide which character in the new array will be included in the new password.

The characters generated will appear as a final password in the text-area.

