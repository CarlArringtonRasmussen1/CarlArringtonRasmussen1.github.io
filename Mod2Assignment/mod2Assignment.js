function firstName()
{
  var output = document.getElementById("firstName").value;
	document.getElementById("outputArea").innerHTML = "Welcome " + output + "!";
	alert("Welcome " + output + "!");
}

function circleArea()
{
  const piValue = 3.1415926;
  var name = document.getElementById("firstName").value;
  var num = document.getElementById("num").value;

  if (Number.isNaN(parseFloat(num)))
		document.getElementById("outputArea2").innerHTML = "<b>ERROR:<b> Invalid input. Try again.";
	else
	{
		num = parseFloat(num);
		var area = piValue * (num * num);
		document.getElementById("outputArea2").innerHTML =
			"Hello " + name + ", you entered " + num + " as your favorite number. " +
			"If that was the radius of a circle, the circle's area would be " + area + ".";
	}

}
