// declare an object literal
var myDog = {
  "name": "Astro",
  "breed": "Great Dane",
  "tvProgram": "The Jetsons",
  "mySound": "I am not scary",
  "canTalk": true,
  "note": "the family dog; about a family in the future",
  "myGreeting": function()
  {
    if(this.canTalk == true)
      var talkMessage = "I can talk!";
    else {
      var talkMessage = "I cannot talk!";
    }

    return `Hello, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
      TV show ${this.tvProgram}. My character was a ${this.breed}. In the show I was ${this.note}.<br>
      By the way, ${talkMessage}`;
  }
};

// add the output to the html Page
document.getElementById("output1").innerHTML = myDog.myGreeting();

// create a dog class
class dog {
  constructor(name, breed, tvProgram, mySound, canTalk, note) {
    this.name = name,
    this.breed = breed,
    this.tvProgram = tvProgram,
    this.mySound = mySound,
    this.canTalk = canTalk,
    this.note = note
  }

  // instance function for objects of type dog
  myGreeting()
  {
    if(this.canTalk == true)
      var talkMessage = "I can talk!";
    else {
      var talkMessage = "I cannot talk!";
    }

    return `Hello, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
      TV show ${this.tvProgram}. My character was a ${this.breed}. In the show I was ${this.note}.<br>
      By the way, ${talkMessage}`;
  }
}

// create an instance of the dog class by using the constructor
let scooby = new dog("Scooby-Doo", "Great Dane", "Scooby-Doo, Where are you", "I am not scary", true,
"a lifelong companion of Shaggy Rogers; about a big dog and several teenage humans");

// add the output to the html Page
document.getElementById("output2").innerHTML = scooby.myGreeting();

let scrappy = new dog("Scrappy-Doo", "Great Dane", "Scooby-Doo, Where are you", "I am not scary", true,
"the nephew of cartoon star Scooby-Doo; about a big dog and several teenage humans");

let astro = new dog("Astro", "Great Dane", "The Jetsons", "I am not scary", true,
"the family dog; about a family in the future");

// use a for-in loop in order to get the information about a dog object
// for(var item in scooby)
//   console.log(`${item}: ${scooby[item]}`)
//
// console.log("--------------------------------");
//
// // use a for-in loop in order to get the information about another dog object
// for(var item in scrappy)
//   console.log(`${item}: ${scrappy[item]}`)
//
// console.log("--------------------------------");
//
// // use a for-in loop in order to get the information about another dog object
// for(var item in astro)
//   console.log(`${item}: ${astro[item]}`)

// variable to hold some text
let text = "";

// update the HTML using the information from the object
for(var item in scooby)
  text += `<b>${item}:</b> ${scooby[item]} <br>`

document.getElementById("output3").innerHTML = text

// create an array of dog objects
let dogList = [];

// add items to the array of objects by using .push()
dogList.push(scooby);
dogList.push(scrappy);
dogList.push(astro);

// use forEach to loop through the array of dog objects
dogList.forEach(dog => {
  for(var item in dog)
     console.log(`${item}: ${dog[item]}`)
  console.log("--------------------------------");
});

// implement the search function
function search()
{
  // variable to retrieve the search term from the text box in the page
  var searchTerm = document.getElementById("dogname").value;

  // object to be returned if the dog object is found with the matching name
  var result = dogList.find(dog => dog.name == searchTerm);

  // check to see if result has a value
  if(result)
  {
    text = "";
    // loop through the dog object information
    for(var item in result)
      text += `${item}: <b>${result[item]}</b> <br>`

    // add the information to the page
    document.getElementById("output4").innerHTML = text;

    // add the information for myGreeting to the Page
    document.getElementById("output5").innerHTML = result.myGreeting();
  }
  else{
    // display an error if the dog object is not found
    document.getElementById("output4").innerHTML = "<b>ERROR:</b> " + searchTerm + " was not found. Try Again";
    document.getElementById("output5").innerHTML = "";
  }
}
