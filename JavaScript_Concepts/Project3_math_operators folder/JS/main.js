function addition_Function() {
    var addition = 2 + 2;// this function dose some simple addition and displayes the result.
    document.getElementById("Add") .innerHTML = "2 + 2 = " +addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;//The subtraction function dose subtcaction and displayes the results.
    document.getElementById("Sub").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8; //As with the addition and subtraction functions this one dose what uyou would expect
    //it handles the expression and displayes the result.
    document.getElementById("mul").innerHTML = "6 x 8 = " + simple_Math;
}

function Division() {
    var simple_Math = 48 / 6;//The division operator dose division and displays the result. th
    document.getElementById("div").innerHTML = "48 / 6 = " + simple_Math;
}

function more_math() { //This one evaluates the expression and displayes the result. 
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("MM").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + simple_Math;
}

function modulus_Operator() {//The modulus operator causes a remainder to be displayed from an the expression below.
    var simple_Math = 25 % 6;//after doing some reserch i relised that i had not used the % operator and had to change it
    //it now displays just the remainder instead of the result of a division operation. so just the remainder now.
    document.getElementById("MO").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;//The negation operator causes a var to become negative. 
    document.getElementById("UO").innerHTML = "the negative of 10 is " + -x;
}


function Xplus() {
    var X = 5;
    X++;//The ++ is the increment opperator and adds one to the var X.
    document.getElementById("XP").innerHTML = "The INCREMENT OPERATORS make 5 = " +X;
}

function Xmin() {
    var X = 5.25;
    X--;// The -- in this line make use of the decrement opperator and lower the var by one
    document.getElementById("XM").innerHTML = "The DECREMENT OPERATORS make 5.25 = " +X;
}

function RAN() {
    document.getElementById("RD").innerHTML = Math.floor(Math.random() * 10)
}
function PIE() {// I picked PIE as the name of the function. seemed right.
    document.getElementById("PI").innerHTML = "The cake is a lie by pie is eternal!!!  " + Math.PI;//see below
    //Math.PI op returns pi with a little message 
    //of my own guess where thats from
}
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Blue",
        Breed: "Lab",
        Age:5,
        Sound:"Bork"
    };
    document.getElementById("Dictionary").innerHTML = "The dog is a "+ Animal.Breed;
}
