//var SP = "<br>"//This line is left over from the document.write exercises i needed something to space stuff out to make it more readable.

function Age_Function() {
    Age = document.getElementById("Age").value;//had a capital v on value and the whole thing dident work.. fml lol
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function BestAnime() {
    show = document.getElementById("show").value;
    if (show === "GITS") {//had to look this up online  i needed to use the === to get it to work properly
        Vote = "You are correct!";
    }
    else if (show === "FLCL") {//had to look this up online  i needed to use the === to get it to work properly
        Vote = "You are correct!";
    }
    else if (show === "Ghost in the Shell") {//had to look this up online  i needed to use the === to get it to work properly
        Vote = "You are correct!";
    }
    else {
        Vote = "You are very wrong!!!";
    }
    document.getElementById("Bestshow").innerHTML = Vote;
}

function TF(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "Its afternoon";
    }
    else {
        Reply = "Its evening time.";
    }
    document.getElementById("Timeofday").innerHTML = Reply;
}

var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var A = 10;
    document.write(20 + A + "<br>");
    console.log(15 + A)
}
function Add_numbers_4() {
    document.write(A + 100);
    console.log(A + 100)
}
Add_numbers_3();
Add_numbers_4();

if (1 < 2) {
    document.write("The left number is smaller than the number on the right." + "<br>")
}

if (10 < 20) {
    document.write("10 < 20 is true" + "<br>")
}

function get_Date(){
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = Date();
    }
}