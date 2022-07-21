// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Password Criteria
  var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
  var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
  var num = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  // Function that checks if its between 8-128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password is not between 8 characters and 128 characters. Please try again.");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  }

  // If cancel is clicked for password criteria 
  else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
    alert("You must chose at least one password criteria.");
    var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
    var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
  }

  // Using criteria selected to generate password
  if (lowercaseLett) {
      optionsVariable += lowercaseAlphabet;
  }

  if (uppercaseLett) {
      optionsVariable += uppercaseAlphabet;
  }

  if (num) {
      optionsVariable += numbers;
  }

  if (specialChar) {
      optionsVariable += specialCharacters;
  }

  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables for all letters, numbers, and characters
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";
