function full() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into ";
    var part_4 = "a sentence. ";
    var whole = part_1.concat(part_2, part_3, part_4);// A concat meaning "Concatenate" means to
    //link (things) together in a chain or series. This takes the values of the variables and 
    //links them together into one long string.
    document.getElementById("Concatenate").innerHTML = whole;

}

function sliceM() {
    var Sen = "All work and no play makes Johnny a dull boy.";
    var Sec = Sen.slice(27,33);//The slice works by only dosplaying the text that has been sliced out of the string 
    //based on the perameiters set in parenthesies after it. in this case it returnes "Johnny"
    document.getElementById("Slice").innerHTML = Sec;
}

function UPPER() {
    var lower = "this is all written lower case";
    var tuc = lower.toUpperCase();//the toUpperCase turns all the text upercase.
    document.getElementById("UC").innerHTML = tuc;
}

function SER() {
    var S1 = "This will result in the position of target."
    var SR = S1.search("target");// returnes the position of the target in this case it is "target" 
    document.getElementById("SF").innerHTML = SR;//it startes on position 36.
}

function SM() {
    var V1 =117;
    document.getElementById("NTS").innerHTML = V1.toString();
}

function PREM() {
    var H = 12938.3012987376112;//to a precisce point of 10 returnes 12938.30130. stating at 0 to 10 the dec takes a space.
    document.getElementById("PRM").innerHTML = H.toPrecision(10);//It takes whats left of the numbers and rounds it up as well
}

function TOF() {
    var num = 8.675309;
    var Y = num.toFixed(2);//to a fixed point, in this case 8.675309 would result in 8.68.
    document.getElementById("TF").innerHTML = Y;
}

function VOF() {//The valueOf() method returns the primitive value of a String object.
    //Note: This method is usually called automatically by JavaScript behind the scenes, and not explicitly in code.
    var GG = "Basic value!";
    var GH = GG.valueOf();//result = A String, representing the primitive value of a string
    document.getElementById("VALOF").innerHTML = GH;
}

function countit() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" = X;
    }
    document.getElementById ("count").innerHTML = Digit;
}
