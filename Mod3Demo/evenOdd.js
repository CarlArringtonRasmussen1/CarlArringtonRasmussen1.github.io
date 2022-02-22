function evenOddInput()
{
	// reset the text variable
	let text = "";
	var num = document.getElementById("input").value;

	if (!Number.isInteger(parseInt(num)))
		document.getElementById("outputArea").innerHTML = "<b>ERROR:<b> Invalid input. Try again.";
	else
	{
		num = parseInt(num);
		evenOdd(num);
	}
}

function evenOdd(num)
{
	if (num == 0)
		document.getElementById("outputArea").innerHTML = "You entered a <b>"+num+"<b>.";
	else if(num % 2 == 0)
		document.getElementById("outputArea").innerHTML = "<b>"+num+"<b> is an <b>even</b> number.";
	else
		document.getElementById("outputArea").innerHTML = "<b>"+num+"<b> is an <b>odd</b> number.";
}
