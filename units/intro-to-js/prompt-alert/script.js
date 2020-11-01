// prompt allows user to input value in a popup dialog
const firstName = prompt("First Name: ");
const lastName = prompt("Last Name: ");
let str = "Greetings " + firstName + " " + lastName + "..!!";

// alert allows to display message in a popup dialog
alert(str);

// console.log allows to print log messages to the console
console.log(str);

// JS supports dynamic type conversion, str was assigned String value before which is now assigned a Number
str = Math.PI;
const strPi = "Value of PI: " + str;

alert(strPi);
console.log(strPi);