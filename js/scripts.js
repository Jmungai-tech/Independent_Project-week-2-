function akanNames(){
    var year=document.getElementById("year").value);
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementVyId("date").value);
    var CC = parseInt( year.slice(0,2));
    var YY =parseInt(year.slice(2,4));

    var male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];
    var gender =document.getElementById("gender").value;
    console.log(gender);


    var CalculateDate = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
    CalculateDate= Math.floor(CalculateDate)

    if( MM<1||MM>12){
        alert("please fill in the correct month")
    };
    if(DD>31 || DD<1){
        alert("please fill in the correct date")
    };

    if (gender) ==="male"){
        sex=male;
    }
    else{
        sex = female;
    };

    var output= sex[CalculateDate]
    document.getElementById("answer").innerHTML ="Congratulations your Akan name is"+ output+".";

};
        
        
