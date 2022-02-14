// to get an input using an alert, use window.prompt()
var name = window.prompt("Enter your name: ");
alert(`Hello ${name}!`)

// use document.getElementById().innerHTML in order to modify content in a Page
document.getElementById("name").innerHTML = "<b>Your Name: </b>" + name;

var length = window.prompt("Enter the length of a side of a square (in inches): ");
var sqArea = parseInt(length) * parseInt(length);
document.getElementById("area").innerHTML = "<b>Length: </b>" + length + " inches <br>"+
											"<b>Area: </b>" + sqArea + " inches";
