var SP = "<br>"//This line is left over from the document.write exercises i needed something to space stuff out to make it more readable.
function RF(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function VT() {// I basicly just re used the code from above and changed it so it would work with the new paramiters.
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "you are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var jack = new Vehicle("Dodge", "Viper", "2022", "Red");
var jEmily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Yellow");
function MYF() {
    document.getElementById("Keywords_and_Constructors").innerHTML = //my question is how do i get it to display othor variables like Emily and jack in the same whaty
    //would i have to add seperat functions or is there a way to call a spacific on with the input tag maby?
    "Erik drives a " + Erik.Vehicle_Color + "-colorer " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
function show(Title, Year) { //I went simpler with this one to minimize errors. but it worked. 
    this.show_Title = Title;// I dident include any other var's as i dont know how to display them yet without writing a new function for each one.
    this.show_Year = Year;// for now FLCL is the only one.
   
}
var FLCL = new show("Fooly Cooly", "2000");//this has been giving me trouble the "new" keyword confuses me. i mean it makes sence on why it works but i guess i need more
//information on what it will be usfull for. i could get the same result by just puting all the info in a string and displaying it. i need to learn what it will be used for.
function MYshow() {
    document.getElementById("New_and_This").innerHTML = FLCL.show_Title + " is an anime " +" released in " + FLCL.show_Year;
}
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}