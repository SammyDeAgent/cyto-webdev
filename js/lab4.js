function HelloThere (){
    alert("Hello There, General Kenobi.");
}

function confirm1(){
    var r = confirm("Press a button!");
    if(r){
        document.getElementById("cp1").innerHTML = "You pressed OKAY!";
    }else{
        document.getElementById("cp1").innerHTML = "You pressed Cancel!";
    }
}

function taxCal(){
    var income = prompt("Please enter your Income. ");
    var totalTax = 0;
    var incomeFloat = parseFloat(income);

    if(incomeFloat < 10000)
        totalTax = incomeFloat*0.05;
    else if((incomeFloat >= 10000)&&(incomeFloat<=100000))
        totalTax = incomeFloat*0.08;
    else
        totalTax = incomeFloat*0.10;
    document.getElementById("ex2-1").innerHTML = "Total income tax: " + totalTax.toFixed(2);
}   

function intDect(){
    var pos=0, neg=0, zero=0;
    for(var i = 0; i < 3; i++){
        var num = prompt("Please enter the index " + (i+1) + " value", "0");
        var numE = parseInt(num);
        if(numE > 0) pos++;
        else if(numE < 0) neg++;
        else if(numE == 0) zero++;
    }
    document.getElementById("ex2-2Z").innerHTML = "Zeroes entered: " + zero;
    document.getElementById("ex2-2P").innerHTML = "Positive numbers entered: " + pos;
    document.getElementById("ex2-2N").innerHTML = "Negative numbers entered: " + neg;
}

function isEven(){
    var input = prompt("Enter an integer","0");
    var value = parseInt(input);
    document.getElementById("ex2-3").innerHTML = "Value "+ value + 
    (isEven2(value) ? " is even." : " is odd.");
    // condition ? value if true : value if false
    function isEven2(num){
        return (num%2===0);
        // triple equal checks for value AND dtype
    }
}

function avgNum(){
    var total = 0;
    for(var i=0;i<5;i++){
        var input = prompt("Please enter index " + (i+1) + " value", "0");
        var temp = parseFloat(input);
        total += temp;
        if(i==0)
            document.getElementById("ex3-1").innerHTML = "Index " + (i+1) + " value entered: " + temp + "<br>";
        else
        document.getElementById("ex3-1").innerHTML += "Index " + (i+1) + " value entered: " + temp + "<br>";
    }
    document.getElementById("ex3-1").innerHTML += "Average test score: " + (total/5).toFixed(2);
}

function pRate(){
    var charge = 2500.00;
    var rate = 1.04;
    for(var i = 0; i< 6 ; i++){
        if(i==0)
            document.getElementById("ex3-2").innerHTML = "Fee for Year " + (i+1) + " = " + charge.toFixed(2) + "<br>";
        else{
            charge *= rate;
            document.getElementById("ex3-2").innerHTML += "Fee for Year " + (i+1) + " = " + charge.toFixed(2) + "<br>";
        }
    }
}

function calTime(){
    var cpm = 3.6;
    for(var i=5;i<35;i+=5){
        if(i==5)
            document.getElementById("ex3-3").innerHTML = "Calories burned after " + (i) + " minutes = " + (i*cpm) + "<br>";
        else 
        document.getElementById("ex3-3").innerHTML += "Calories burned after " + (i) + " minutes = " + (i*cpm) + "<br>";
    }
}