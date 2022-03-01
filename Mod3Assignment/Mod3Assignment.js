var text = "";
var i;

for(i = 0; i <= 10; i++)
{
  // check to see if i is even or odd
  if(i % 2 == 0)
    text += "Count " + i + " is even <br>";
  else
    text += "Count " + i + " is odd <br>";
}

document.getElementById("forloop").innerHTML = text;

// part 2
function doWhileLoopDemo()
{
  //reset the text variable
  text = "";
  var myNum = document.getElementById("input").value;

  if(parseInt(myNum) < 5)
    document.getElementById("doWhileLoop").innerHTML = "<b>ERROR: </b> Number must be at least 5. Try Again.";
  else if(parseInt(myNum) > 20)
    document.getElementById("doWhileLoop").innerHTML = "<b>ERROR: </b> Number must be less than 20. Try Again.";
  else if(!Number.isInteger(parseInt(myNum)))
    document.getElementById("doWhileLoop").innerHTML = "<b>ERROR: </b> Invalid Input. Try Again.";
  else {
    myNum = parseInt(myNum);
    var i = 1;
    do {
      text += "This is iteration #" + i + "<br>";
      i++;
    } while (i <= myNum);
    document.getElementById("doWhileLoop").innerHTML = text;
  }
}

function forEachDemo()
{
  let arr = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
	let text = "[";

  arr.forEach((item, index) => {
    if(index == arr.length - 1)
      text += item;
    else
      text += item + ", ";
  });

  text += "]";

  document.getElementById("forEachDisplay").innerHTML = text;

}
