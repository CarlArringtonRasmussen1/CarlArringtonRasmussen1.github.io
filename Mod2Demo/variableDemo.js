// create a variable named name and store "Homer Simpson"
var name = "Homer Simpson";

// create a variable called hourlyWage that holds an integer
// integers are whole numbers without decimal places
var hourlyWage = 15;

// create a variable called weekly hours that holds a number as a string
var weeklyHours = "40";

// create a variable that calculates the weekly wage by multiplying the
// hourlyWage and a converted weeklyHours
var weeklyWage = hourlyWage * parseInt(weeklyHours);

// output the value of the name variable
console.log(`Hello ${name}!`);

// output the value of the hourlyWage
console.log(`${name} makes ${hourlyWage}.00 dollars per hour.`);

// output the user's weekly wage
console.log(`${name} makes ${weeklyWage}.00 dollars per week.`);
