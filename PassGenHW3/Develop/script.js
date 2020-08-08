
//Criteria Functions

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
  const symbols = "!@#$%^&*(){}[]=<>/,."
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Random Function Object
var randomFunction = { 
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};





// Assignment Code
var generateBtn = document.querySelector("#generate");
var submitBtn = document.querySelector("#submitBtn");
var passwordEl = document.querySelector("#password");
var lengthEl = document.querySelector("#length");
var upperCaseEl = document.querySelector("#upperCase");
var lowerCaseEl = document.querySelector("#lowerCase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var generateEl = document.querySelector("#generate");


 //passCard function
function writePassword() {
//deactivte d-none
var passCard = document.querySelector("#passCard");

  if (passCard.classList.contains("d-none")) {
    passCard.classList.remove("d-none");

  } 
  else {
    passCard.classList.add("d-none");
    } 

}

//check box
function criteriaSubmit(event) {
  event.preventDefault();
  var length = +lengthEl.value;
  var hasUpper = upperCaseEl.checked;
  var hasLower = lowerCaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
  
  passwordEl.innerText = generatePassword(length,hasUpper,hasLower,hasNumber,hasSymbol);
}

//generate password
function generatePassword(length,upper,lower,number,symbol){

  var generatedPassword = "";

  var typesCount = upper + lower + number + symbol;
  //console.log("typesCount:", typesCount);

  var typesArr = [{upper}, {lower}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );

  //console.log("typerArr", typesArr);

  if(typesCount === 0) {
    return "";
  }

  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
     //console.log("funcName", funcName); 
    
    generatedPassword += randomFunction[funcName]();
  });
  } 
  
  //return finalPassword;
  var finalPassword = generatedPassword;
  return finalPassword;

}
// Event listeners
  generateBtn.addEventListener("click", writePassword);
  submitBtn.addEventListener("click", criteriaSubmit);





//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// check boxes : lower case, upper case, numeric, special  charactors, length.

