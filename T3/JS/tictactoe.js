//this is to keep track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves we use this to determin win conditions
let selectedSquares = [];

//this function is for placeing a x or o in a square.
function placeXOrO(squareNumber) {
    //this ensures a square hasent been selected already.
    //the .some() method is used to check eadch element of selectedSquar array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var restieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks whs turn it is
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X' the x.png is placed in html
            select.style.backgroundImage = 'url("images/swordsXX.png")';
            //active player may only be x or o so if nt x it must be o
        } else {
            //if activePlayer is equal to o the o.png is placed in html
            select.style.backgroundImage = 'url("images/shieldOO.png")';
        }
        //squareNumber and activeaPlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calles a function to check for any win conditions 
        checkWinConditions();
        //this condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is x change it to o
            activePlayer = 'O';
        } else {
            //change activ player to x
            activePlayer = 'X';
        }
        //this function plays placment sound
        audio('./media/swordplace.mp3');//this was where my error was i had  a { here and not below.
        //this condition checks to see if it is the computers turn
       if(activePlayer === 'O'){//i dident have the { here. this let the computer take over for bolth players
            disableClick();
            //this function waits 1 second before computer places img and enables click.
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        //returning true is needed for the computersTurn() function to work
        return true;
    }    
    //this function results in a random square being selected
    function computersTurn() {
        //this boolean is needed for our wile loop
        let success = false;
        //this var stores a random number 0-8
        let pickASquare;
        // this condition allows our wile loop to keep trying trying if a square id selected already
        while(!success){
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // a random number evaluated returns true, the square hasent been selected yet
            if (placeXOrO(pickASquare)){
                //this line calles the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}
//this function parses the selectedSquares array to search for win conditions
//drawWinLine function is called to draw line if condition is met
function checkWinConditions() {
    // x 0, 1, 2 condition
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine( 50, 100, 558, 100) }
    //x 3, 4, 5 conditions
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine( 50, 304, 558, 304) }
    //x 6, 7, 8 cond
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine( 50, 508, 558, 508) }
    //x 0, 3, 6 cond
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine( 100, 50, 100, 558) }
    // x 1, 4, 7 cond
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine( 304, 50, 304, 558) }
    // x 2, 5, 8 cond
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine( 508, 50, 508, 558) }
    // x 6, 4, 2 cond
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine( 100, 508, 510, 90) }
    // x 0, 4, 8 cond
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine( 100, 100, 520, 520) }
    // o 0, 1, 2 cond
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine( 50, 100, 558, 100) }
    //o 3, 4, 5 cond
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine( 50, 304, 558, 304) }
    // o 6, 7, 8 cond
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine( 50, 508, 558, 508) }
    // O 0, 3, 6 cond
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine( 100, 50, 100, 558) }
    // o 1, 4, 7
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine( 304, 50, 304, 558) }
    // o 2, 5, 8 
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine( 508, 50, 508, 558) }
    //o 6, 4, 2
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine( 100, 508, 510, 90) }
    //o 0, 4, 8 
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine( 100, 100, 520, 520) }
    // this condition checks for tie if none of the above conditions register and 9
    //squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //this functions playes the tie game sound
        audio('media/swordtie.mp3');
        //this function sets a .3 sec time befor the resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }

    // this function checks if an array includes 3 strings. it is used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 var we pass are all included in our array true is
        //returned and our else if cond executes the drawWinLine function
        if (a === true && b === true && c === true) {return true}
    }
}

function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function() {body.style.pointerEvents = "auto";}, 1000);
}
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines")
    const c = canvas.getContext("2d");
    let x1 = coordX1, 
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, .8)";
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }
        } 
         function clear() {
             const animationLoop = requestAnimationFrame(clear);
             c.clearRect(0, 0, 608, 608);
             cancelAnimationFrame(animationLoop);
         }  
         disableClick();
         audio("./media/swordwinGame.mp3");
         animateLineDrawing();
         setTimeout(function () { clear(); resetGame(); }, 1000);
        }
        function resetGame() {
            for (let i = 0; i < 9; i++) {
                let square = document.getElementById(String(i))
                square.style.backgroundImage = ""
            }
            selectedSquares = [];
        }
    


