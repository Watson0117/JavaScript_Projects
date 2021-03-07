//var SP = "<br>"//This line is left over from the document.write exercises i needed something to space stuff out to make it more readable.


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var Y = document.forms["myForm"]["lname"].value;
    var Z = document.forms["myForm"]["Email"].value;
    var ZZ = document.forms["myForm"]["phoneNumber"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (Y == "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (Z == "") {
        alert("Email must be filled out");
        return false;
    }
    if (ZZ == "") {
        alert("Phone Number must be filled out");
        return false;
    }
}