function call_loop() {
    var Digit = "";//this set a var but dosent specify a value 
    var X = 1;
    while (X < 11) {//this defins where the loop will start and how it will end. it should loop as long as X is less than 11
        Digit += "\n" + X;//this sets the value of Digit after run. it starts as zero basicly and then gets X added to it makeing the value one.
        X++;//the one is then incromented on this line to make a new value
    }
    document.getElementById("loop").innerHTML = Digit;// the new value of Digit is then writen with innerHTML. the loop then returnes to while.
}

function STL() {
    var Sen = "Hello World";//this string in 20 characters long and is a simple string value. it is set to the var Sen.
    var stinglenght = Sen.length;//the sringlenght op gets the string length. in this case 20.
    document.getElementById("SL").innerHTML = stinglenght;//this line makes the page display the value of stringlength as defined before.  
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];//this is an array of different instruments
var Content = "";//this defins a var Content but dosent set the value
var Y;// this defines the var Y but dosent set the value in this line
function for_loop() {//this for loop sets the values of bolth Y and Content as they work with each other.
var a = "<br>";
    for (Y = 0; Y < Instruments.length; Y++) {//this sets the value of Y as the first option in the array or position 0. it then increments the position in the array by 1 
        Content += Instruments[Y] + a;//this makes content = Y which has a value of the 0 position in the array at the start of the loop.
    }
    document.getElementById("List_of_Instruments").innerHTML = Content //this writes Content wich then goes through thre loop and gets written agian untill the peramiters are met.
}

function cat_pics(){
    var Cat_Picture = [];//this defins the array
    Cat_Picture[0] = "sleeping";//this is an object within the array that has specific properties. Cat_Picture is the object and sleeping is the property.
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "Now the cat is " +//this writes the string and then adds the object and propertys of that object to creat a full string.
    Cat_Picture[3] + ".";
}

function constant_function() {
    const Musical_instrument = {type:"guitar", brand:"Fender", color:"black"};//this demonstrates the const or constant op it permanently sets Musical_instrument
    //as an object. it makes it unchangable by code later.
    Musical_instrument.color = "blue";//This line modifies a property of Musical_instrument but not the object.
    Musical_instrument.price = "$900";//This adds a property not defined in the object
    Musical_instrument.memberdiscount = "5%"
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_instrument.color + " " +//this line writes a string with the collection of propertys
        Musical_instrument.type + " was " + Musical_instrument.price + "." + 
        "   If you are a member you can get an additional " + Musical_instrument.memberdiscount + " off."
}

function PIE() {
    return Math.PI;   //this returns PI 
}
document.getElementById("MPI").innerHTML = PIE();// this writes PI


let car = {// this defines an object called car. If inside of a block the let would set a var that only works in that block.
    make: "Dodge ",//these are the properties of car
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {//this sets the decription function to return the propertys of car.
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();//this tells the page the write car.description wich is made up of the properties.

var Z = 82;//This set the var Z to 82 for the whole doc. or globaly
function DR(){
    document.getElementById("DR1").innerHTML = Z;//this writes the var Z of 82
    {//this defines the begining of a function
        let Z = 33;//this sets that var of Z to 33 but because we used let it only consideres Z to be 33 within this block
        document.getElementById("DR2").innerHTML = Z;// This writes Z as 33 as it is within the function
    }//The end of the function or {} brackets
    document.getElementById("DR3").innerHTML = Z;//This demonstrates the var Z as set above the function. 
}//changed the document.write to getElementById. they would not display whene defer was in the scr line. not sure why yet. but if i remove it some othor stuff dosent work correctly.

function BREAKFUN() {
    var text = "";//sets the text var
    var i;//sets the i var
    for (i = 0; i < 11; i++) {//sets i as 0 and increments it
        if (i === 3) {//This part tells the loop to continue if i the op's are of the same type and same value.
            continue;
        }
        if (i === 10) {
            break;//this tells the loop to stop if the opperand equals 10 and is the same type.
        }
        
        text += "The number is " + i + "<br>";//this sets text as the result of i which is the written below and looped
    }
    document.getElementById("BFP").innerHTML = text;//this writes the results and then loops
}