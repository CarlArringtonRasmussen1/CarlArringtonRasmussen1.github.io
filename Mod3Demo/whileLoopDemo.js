var text = "";
var i = 1;
while(i <= 20)
{
	text += "This is iteration #" + i + "<br>";
	i++;
}
document.getElementById("output").innerHTML = text;
