//var SP = "<br>"//This line is left over from the document.write exercises i needed something to space stuff out to make it more readable.
function Color_Function() {
    var Color_Output;
    var colors = document.getElementById("Color_Input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "red":
            Color_Output = "red" + color_string;
        break;
        case "yellow":
            Color_Output = "yellow" + color_string;
        break;
        case "green":
            Color_Output = "green" + color_string;
        break;
        case "blue":
            Color_Output = "blue" + color_string;
        break;    
        case "pink":
            Color_Output = "pink" + color_string;
        break;
        case "purple":
            Color_Output = "purple" + color_string;
        break;
        default:
            Color_Output = "please enter a color exactly as written above"            
    }
    document.getElementById("Output").innerHTML = Color_Output;//spent 20 min looking for error and i forgot 
    //the "" around output....fml
}

function HWF() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
    A[2].innerHTML = "The text has changed!";
}


function myCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("VB");
  ctx.drawImage(img,10,10);
}


var c = document.getElementById("myCan2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
