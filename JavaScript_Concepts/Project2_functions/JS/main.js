var A = "This is var A!!!"// this sets var A
function change(){
    var x = document.getElementById("changeit");
    x.style.fontFamily = "Impact";//experiments to see if it would change more than on attribute
    x.style.fontStyle = "italic";//experiments to see if it would change more than on attribute
    x.style.textDecoration = "underline";//experiments to see if it would change more than on attribute
    x.style.color = "red";
}


function change2() {
    var x = document.getElementById("changeit2");
    x.style.fontFamily = "Impact";//experiments to see if it would change more than on attribute
    x.style.fontStyle = "italic";//experiments to see if it would change more than on attribute
    x.style.textDecoration = "underline";//experiments to see if it would change more than on attribute
    x.style.color = "blue";
}

function CF() {//this is my concatenate function
    var SEN = "I am learning";//i use var SEN to identify the sentence
    SEN += "a lot form this book!";//+= operator to concatenate a string
    document.getElementById("CON") .innerHTML = SEN;//I give it the id CON that will be used in the html
}

function FF() {
    document.getElementById("H").innerHTML = "It worked!";
}
