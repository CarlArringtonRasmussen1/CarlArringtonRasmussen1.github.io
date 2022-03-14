// declare an object literal
var myDog = {
  "name": "Astro",
  "breed": "Great Dane",
  "tvProgram": "The Jetsons",
  "mySound": "I am not scary",
  "note": "the family dog; about a family in the future",
  "myGreeting": function()
  {
    return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
      TV show ${this.tvProgram}. My character was a ${this.breed}. In the show I was ${this.note}.</p>`;
  }
};

// add the output to the html Page
document.getElementById("output1").innerHTML = myDog.myGreeting();

// create a dog class
class dog {
  constructor(name, breed, tvProgram, mySound, note) {
    this.name = name,
    this.breed = breed,
    this.tvProgram = tvProgram,
    this.mySound = mySound,
    this.note = note
  }

  // instance function for objects of type dog
  myGreeting()
  {
    return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
      TV show ${this.tvProgram}. My character was a ${this.breed}. In the show I was ${this.note}.</p>`;
  }
}

// create an instance of the dog class by using the constructor
let scooby = new dog("Scooby-Doo", "Great Dane", "Scooby-Doo, Where are you", "I am not scary",
"a lifelong companion of Shaggy Rogers; about a big dog and several teenage humans.");

// add the output to the html Page
document.getElementById("output2").innerHTML = scooby.myGreeting();
