var text = "";
var i;

for (i = 1; i <= 5; i++)
{
	text += "This is iteration #" + i + "<br>";
}

document.getElementById("forloop").innerHTML = text;

function forloopDemo()
{
	// reset the text variable
	let text = "";
	var num = document.getElementById("input").value;

	if (parseInt(num) < 1)
		document.getElementById("forloop2").innerHTML = "<b>ERROR:<b> Number must be at least 1. Try again.";
	else if (!Number.isInteger(parseInt(num)))
		document.getElementById("forloop2").innerHTML = "<b>ERROR:<b> Invalid input. Try again.";
	else
	{
		num = parseInt(num);
		for (i = 1; i <= num; i++)
		{
			text += "This is iteration #" + i + "<br>";
		}
		document.getElementById("forloop2").innerHTML = text;
	}
}
