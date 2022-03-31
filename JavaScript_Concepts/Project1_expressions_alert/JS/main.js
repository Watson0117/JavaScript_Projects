var A = "This is var A!!!"// this sets var A
var B = "\"this is a string with special caracters, don't is an example\""//This is to shoe hoe escaping works that is the / befor a charictor that has a special purpos in the code
var C = A+B+A//This creats a var that is mad up of othor vars
var D = "Delta", E = "Echo", F = "Foxtrot"// this defins multipl variabls
var E = E.fontcolor("blue");//This set the font color of the var
var F = F.fontcolor("yellow");//This set the font color of the var
var D = D.fontcolor("red");//This set the font color of the var
document.write(C);//this writes the C variable to the top of the page
document.write(D);//this writes the D variable to the top of the page
document.write(E);//this writes the E variable to the top of the page
document.write(F+E+D);//This combins vars F,E, and D and writes the to the top of tha page
document.write(3+6+9);// This add 3+6+9 and write the result at the top

function MFF(){   //this is the start of the function it defins it an names it
    var str = "this text is green"; //this defines the str var that will be displayed when the button in the html is clicked
    var result = str.fontcolor("green");//this set the color of the var str using the
    document.getElementById("Green_Text") .innerHTML = result;//putting the value of result into html element with "Green_Text" id
    //It is what is put into the button tag
}  //This is the end of the function

function bigImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}