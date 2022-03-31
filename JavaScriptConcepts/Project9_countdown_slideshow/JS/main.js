function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        if (seconds > 0){
            seconds = seconds - 1;
            timer.innerHTML = seconds;
            setTimeout(tick, 1000);//means that the program is pausing for 1,000 milliseconds, 1 second.
            if (seconds == 0) {
                alert("Times up!!!")//oddly the timer keeps going into negativ numbers after clicking away the alert.
            }   
        } 
    }
    tick();
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";// i think this makes it so nothing is displayed untill one of the dots is clicked on.
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");// this chooses wich dot is active after clicking.
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}