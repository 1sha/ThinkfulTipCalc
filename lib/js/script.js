function tipCalcMain(principal, percentage) {
	return principal * (percentage/100);

}

window.onload = function(){
	var bill = parseFloat(prompt("How much was your meal?")); 
	var tax = parseFloat(prompt("What is your tax amount? Use a percent, e.g. 32, if 32% not .32"));
	var tip = parseFloat(prompt("How much of a tip do you want to leave, in percentage again?"));
	var taxAmount = tipCalcMain(bill, tax);
	var subTotal = taxAmount + bill;
	var tipValue = tipCalcMain(subTotal, tip);
	var costOfMeal = preTipCost + tipValue;
	var message = (" $" + tax.toFixed(2) + 'Goes to Uncle Sam ' +

								"LEave $" + tip.toFixed(2) + " for a tip. " +
								"The total cost for your meal comes to $" + costOfMeal.toFixed(2) + '.');
	alert(message);
}