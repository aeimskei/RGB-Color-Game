// add code to give the squares different color
// everytime the page loads, it'll pick 6 random colors
// and assigns each color to one of the divs

// keep track which level players are in
var numSquares = 6;

// make an array of colors (put on separate lines for more visibility)
// an array of 6 colors as strings
var colors = generateRandomColors(numSquares);

// let's also change the h1 background color to match the picked color
var h1 = document.querySelector("h1");

// create function for button to rest game, needs to add Event Listener to button
var resetButton = document.querySelector("#reset");

// easy vr hard mode buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// add click listeners to easy vs hard mode
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares); // when click on easy button, generate 3 new colores
    pickedColor = pickColor(); // one of those will be new pickedColor
    colorDisplay.textContent = pickedColor; // need to updates RGB span for pickedColor
    for (var i = 0; i < squares.length; i++) { // upate the 3 squares and hide the 3 other squares below by setting display to none
        if (colors[i]) { // if there is a next color
            squares[i].style.backgroundColor = colors[i]; // means, for the first 3, loop through all of the squares, check there is a color at that index, if there is, change the colors of first 3
        } else { // hide the bottom 3
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares); // when click on easy button, generate 6 new colors
    pickedColor = pickColor(); // one of those will be new pickedColor
    colorDisplay.textContent = pickedColor; // need to updates RGB span for pickedColor
    for (var i = 0; i < squares.length; i++) { // upate all squares to have colors
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"; // shows the previously hidden squares in easy mode
    }
});

resetButton.addEventListener("click", function() {
    // when you click on that button "need to generated all new colors" (re-use generateRandomColors function)
    colors = generateRandomColors(numSquares);
    // pick a new random color from array (re-use the methog/function defined previously)
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
});

// simple test for event listener (when we click, it will do a simple function)
/* resetButton.addEventListener("click", function() {
    alert("CLICKED RESET BUTTON");
}); */
    
// select all 6 squares, loop through them and assign on of these colors to each one's backgrounds
// use document.querySelectorAll bc we have a lot of choices, to make sure to get all 6
// select based off of the "class" .square not the container
var squares = document.querySelectorAll(".square");

// next, generate 3 different numbers from 0-255 and then combine them
// so just 3 differen channels, all randomized into one big string with RGB
var pickedColor = pickColor();

// then update page so that it says RGB and in () the colors
// to do that, have to change html, put span around "RGB" with id="colorDisplay"
var colorDisplay = document.getElementById("colorDisplay");

// flash message to show "correct" if right or "try again" if wrong
var messageDisplay = document.querySelector("#message");

// update "colorDisplay" so it says the color picked
colorDisplay.textContent = pickedColor;

// [i] is going to loop through all squares (0, 1, 2, 3, 4, 5)
// each var "squares" will be colored based on the array of var "colors"
for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i]; // use style.backgroundColor (now it'll work with all browsers)
    
    // add click listeners to squares and callback function
    squares[i].addEventListener("click", function(){
        // grab color of clicked square (use "this" to refer to the item that was clicked)
        var clickedColor = this.style.backgroundColor;
        // compare color to "pickedColor" by writing an "if" statement
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor); // call and pass in the "clickedColor" above
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

// ^ use loop above
// add logic to the "click" events (start off with simple picked handler)
// so use the same loop that we have bc we're gonna use for all squares
// when run code for which color if clicked on squares and compared to the "pickedColor"
// if different not "pickedColor", change the color of square to background of the body
// if selects correct one to "pickedColor", then the player has won! (do something special)
// add behavior for when you click the right color or wrong color
// if it's wrong, fade out the color to background
// in the text display, we also want it to have a message of "correct" or "try again" (go back to html and add another div)

// add feature for when you get right color, all squares will change color to match the correct color
// can also change the color background of h1 as well
// write a separate function to keep code more organized that takes single argument (color) string
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) { // loop throuh all squares
    squares[i].style.backgroundColor = color; // change each color to match the given color
    }
}

// now get random color in array with a function (bc we have to call a few times) 
// picking random color from that array
// this function will do two things
function pickColor() {
   var random = Math.floor(Math.random() * colors.length); // (1) pick a random number
    // (2) then use that random number to access the color of the array and return that color
    return colors[random];
}

// make it so we don't use only a variation of the 6 colors in array (really randomize now)
// create function to call for "generateRandomColors()"
function generateRandomColors(num) {
    var arr = []; // make an empty array
    for (var i = 0; i < num; i++) { // repeat num times
        arr.push(randomColor());// get random color and push into array (create randomColor function to call)
    }
    return arr; // return array at end
}

function randomColor() {
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // now we have to synthesize to "rgb(r, g, b)" and return that string
   return "rgb(" + r + ", " + g + ", " + b + ")";
}