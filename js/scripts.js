var saySomething= function(whatToSay) {
    alert(whatToSay)
}
saySomething("Hello! Welcome to my webpage.")
var DayOfTheWeek= function(CC,YY,MM,DD) {
    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
}
var CC=parseInt(prompt("Enter the century you were born"));
var YY=parseInt(prompt("Enter the year you were born"));
var MM=parseInt(prompt("Enter the month you were born "));
var DD=parseInt(prompt("Enter the day "));
var result=DayOfTheWeek(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ));
alert(result);
