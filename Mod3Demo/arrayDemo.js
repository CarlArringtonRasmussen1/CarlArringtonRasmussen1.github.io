// array of strings
let fruits = ["Apple", "Orange", "Cherry", "Banana", "Grapes", "Strawberry", "Peach"];

var output = "[";

fruits.forEach((fruit, index) => {
  if(index == fruits.length - 1)
    output += fruit + "]";
  else
    output += fruit + ", ";
});

document.getElementById("arrayContents").innerHTML = output;

// generate random number of numbers
let numbers = [];

// determines between 1 and 11 numbers to be generated
let count = Math.floor(1 + (Math.random() * 11));

for (var i = 1; i <= count; i++)
	numbers.push(Math.floor(1 + (Math.random() * 100))); // generates a number between 1 and 100

output = "[";

numbers.forEach((number, index) => {
	if(index == numbers.length - 1)
		output += number + "]";
	else
		output += number + ", ";
});

document.getElementById("arrayContents2").innerHTML = output;

// uses map function to create an array from the numbers
var timesThree = numbers.map(number => {
	return number * 3;
});

output = "[";

timesThree.forEach((number, index) => {
	if(index == numbers.length - 1)
		output += number + "]";
	else
		output += number + ", ";
});

document.getElementById("arrayContents3").innerHTML = output;
