var SP = "<br>"
document.write(typeof "word"); document.write(SP)//This shows the typeof. word is a string so type of is string
document.write(typeof 3); document.write(SP)//This shows the typeof. 3 is a number so type of is number.
document.write(2E310); document.write(SP)//This displayes infinity
document.write(-2E310); document.write(SP)//This displayes -infinity
document.write(10 > 2); document.write(SP)//10 is greater than 2 so this is true
document.write(10 < 2); document.write(SP)//10 is not less than 2 so this is false
document.write("2 > 1 AND 3 > 2 =  " + (2 > 1 && 3 > 2)); document.write(SP)//2 is greater than 1 and 3 is greater than 2 so this is true
document.write("2 < 1 AND 3 > 2 =  " + (2 < 1 && 3 > 2)); document.write(SP)//2 is not less than 1 and 3 is greater than 2 so this is false
document.write("2 < 1 AND 3 < 2 =  " + (2 < 1 && 3 < 2)); document.write(SP)//2 is not less than 1 and 3 is not less than 2 so this is false
document.write("2 > 1 AND 3 < 2 =  " + (2 > 1 && 3 < 2)); document.write(SP)//2 is greater than 1 and 3 is not less than 2 so this is false
document.write("2 > 1 or 3 < 2 =  " + (2 > 1 || 3 < 2)); document.write(SP)//if 2 is greater than 1 or 3 is not less than 2 this is true
document.write("2 < 1 or 3 < 2 =  " + (2 < 1 || 3 < 2)); document.write(SP)//2 is not less than 1 or 3 is less than 2 this is false
document.write("By adding ! the not op this now shows true see : 2 < 1 or 3 < 2 =  " + !(2 < 1 || 3 < 2))//2 is not less than 1 or 3 is less than 2 this is false
document.write(SP)
document.write("10 = 10 =  " + (10 == 10)); document.write(SP)
document.write("10 = 9 =  " + (10 == 9)); document.write(SP)
document.write("5+5+5 = 15 =  " + (10 + 5 == 15)); document.write(SP)
document.write("A=B, B=10,  C= 'Ghost',   D= 'Ghost' E= 'Shell'"); document.write(SP)//this line is to make it more understandable when viewing the HTML page.

var A = 10
var B = 10
var C = "Ghost"
var D = "Ghost"
var E = "Shell"// I relize i could have put these all under 1 var tag. i might change it later.

document.write(SP)
document.write("A and B are equal and of the same data type?  " + (A === B)); document.write(SP)// === comparest values and data types.
// a=10 b=10 they are the same data type and have the same value so true.
document.write("A and C are equal and of the same data type?  " + (A === C)); document.write(SP)//A=10 C= ghost they are different data types and different values so it is false
document.write("C and D are equal and of the same data type?  " + (C === D)); document.write(SP)// C=ghost and D=ghost they are the same data type and have the same value so true.
document.write("C and E are equal and of the same data type?  " + (C === E)); document.write(SP)//c=ghost E=shell they are the same data type but have different values so false.
console.log(2 + 2);// This returns 4 in the console.
document.write("10" + 5); document.write(SP)// This returns 105 combining the string and the number.
console.log(2 < 1); document.write(SP)//This creats the result false in the console

function MyF1(){
    document.getElementById("MF1").innerHTML = "Because you cant divide 0 by 0 the answer is not a number or "+ 0/0;// You cant divide 0 by 0 so the result is NAN.
}
function isnanT() {
    document.getElementById("INT").innerHTML = " Because 0117 is a number the answer is  " + isNaN('0117');//0117 Is a number so using NAN NOT A NUMBER returns false
}
function isnanF() {
    document.getElementById("INF").innerHTML = "Because Agent is not a number the answer is  " + isNaN("Agent");//Agent is NOT A NUMBER so this returns true
}
function NFN() {
    document.getElementById("NF").innerHTML = " Using the not function 20 > 10 = " + !(20 > 10);//This utilizes the NOT function.
}
function NFN2() {
    document.getElementById("NF2").innerHTML = " Using the not function 20 > 10 = " + !!(20 > 10);//This utilizes the NOT NOT function.
}