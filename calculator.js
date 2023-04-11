var operator;
var num1;
var num2;
var output;

function cal(d)
{

var a=parseInt(document.getElementById(d).innerText); 
document.getElementById("txtbox").value+=a;

}

function dot()
{

document.getElementById("txtbox").value+=".";
}

function operation(d)
{

operator=document.getElementById(d).innerText;
num1=parseInt(document.getElementById("txtbox").value);
document.getElementById("txtbox").value="";
}

function equal()
{

num2 = parseInt(document.getElementById("txtbox").value);

if (operator=="-")
{

output=num1-num2;

}

else if (operator=="+")
{

output=num1+num2;

}
else if (operator=="/")
{

output=num1/num2;

}
else if (operator=="x")
{

output=num1*num2;

}

else {
  output=0;
}

document.getElementById("txtbox").value=output;



}
