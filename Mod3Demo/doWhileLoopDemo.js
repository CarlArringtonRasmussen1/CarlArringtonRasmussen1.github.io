var text = "";
var i = 1;
do
{
	text += "This is iteration #" + i + "<br>";
	i++;
}while(i <= 20);
document.getElementById("output").innerHTML = text;
