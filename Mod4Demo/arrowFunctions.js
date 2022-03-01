var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

console.log('Original Array:');
console.log(theStagesOfJS);
console.log("-------------------------------");

// An Arrow function is a new concise syntax for function
// Arrow functions allow us to drop the `function` keyword and just show the parameters.
// Note: The fat arrow `=>` that was added to indicate an arrow function.
var mapArrow1 = theStagesOfJS.map((item) => {
  return item;
});

console.log('Mapped Array using Arrow Function:');
console.log(mapArrow1);
console.log("-------------------------------");

// We can drop the parentheses around the parameter if there's only one of them,
// but if we include the return keyword we must surround the return statement with curly braces.
var mapArrow2 = theStagesOfJS.map(item => { return item});

console.log('Updated Mapped Array using Arrow Function:');
console.log(mapArrow2);
console.log("-------------------------------");

// And finally, we can just drop the `return` keyword. The return is implied.
var mapArrow3 = theStagesOfJS.map(item => item);
console.log('Updated Mapped Array using Arrow Function with no curly braces:');
console.log(mapArrow3);
console.log("-------------------------------");

// Functions with more than one parameter still need the parenthesis
var mapArrow4 = theStagesOfJS.map((item, index) => {return `Stage ${index}: ${item}`});
console.log('Mapped Array using Arrow Function with index and value:');
console.log(mapArrow4);
console.log("-------------------------------");

// we can also just drop the curly braces if needed
var mapArrow5 = theStagesOfJS.map((item, index) => `Stage ${index}: ${item}`);
console.log('Mapped Array using Arrow Function with index and value and no curly braces:');
console.log(mapArrow5);
console.log("-------------------------------");
