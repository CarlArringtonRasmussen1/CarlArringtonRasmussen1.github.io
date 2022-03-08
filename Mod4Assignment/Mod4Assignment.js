function calculate()
{
  var text1 = "", text2 = "", text3 = "";
  var amount = document.getElementById("dollarAmount").value;

  if(parseFloat(amount) < 5)
    document.getElementById("servicePrice").innerHTML = "<b>ERROR:</b> Service Price must be at least $5.00. Try again.";
  else if(parseFloat(amount) > 500)
    document.getElementById("servicePrice").innerHTML = "<b>ERROR:</b> Service Price must be no more than $500.00. Try again.";
  else if(Number.isNaN(parseFloat(amount)))
    document.getElementById("servicePrice").innerHTML = "<b>ERROR:</b> Must enter a number. Try again.";
  else {
    // valid input of a number between $5 and $500
    // convert the service price to a float
    var servicePrice = parseFloat(amount);
    // declare variables to hold the tip amount and the final Price
    var tipAmount, finalPrice;
    // process the tip and calculate the final price
    if(document.getElementById("great").checked)
    {
      tipAmount = servicePrice * 0.20;
      text2 += "<b>Service Quality: </b>Great <br>";
    }
    else if(document.getElementById("ok").checked)
    {
      tipAmount = servicePrice * 0.15;
      text2 += "<b>Service Quality: </b>OK <br>";
    }
    else if(document.getElementById("poor").checked)
    {
      tipAmount = servicePrice * 0.10;
      text2 += "<b>Service Quality: </b>Poor <br>";
    }
    // calculate the final Price
    finalPrice = servicePrice + tipAmount;

    // use .tofixed() to round down to two decimal places
    servicePrice = servicePrice.toFixed(2);
    tipAmount = tipAmount.toFixed(2);
    finalPrice = finalPrice.toFixed(2);

    text1 += "<b>Service Price: </b>$" + servicePrice;
    text2 += "<b>Tip Amount: </b>$" + tipAmount;
    text3 += "<b>Final Price: </b>$" + finalPrice;

    document.getElementById("servicePrice").innerHTML = text1;
    document.getElementById("tipAmount").innerHTML = text2;
    document.getElementById("finalPrice").innerHTML = text3;
  }
}
