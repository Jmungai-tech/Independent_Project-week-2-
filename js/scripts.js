var day= function(CC,YY,MM,DD) {
    return  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    }

var CC=parseInt(prompt("Century"));
var YY=parseInt(prompt("Year"));
var MM=parseInt(prompt("Month"));
var DD=parseInt(prompt("Day"));

var weekday= day(CC,YY,MM,DD);
var days=weekday.toFixed(0);
alert(days);


     var myDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaki","Yaw","Kofi","Kwame"];
     var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

     if (gender==='male');{
        alert(maleNames[days]);}
        
