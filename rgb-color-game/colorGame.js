// add code to give the squares different color
// everytime the page loads, it'll pick 6 random colors
// and assigns each color to one of the divs

// make an array of colors (put on separate lines for more visibility)
// an array of 6 colors as strings
var colors = [
    "rgb(255, 0, 0)", // all red
    "rgb(255, 255, 0)", // all red and green = yellow
    "rgb(0, 255, 0)", // all green
    "rgb(0, 255, 255)", // all green and blue = cyan
    "rgb(0, 0, 255)", // all blue
    "rgb(255, 0, 255)" // all red and blue = purple
    ];
    
// select all 6 squares, loop through them and assign on of these colors to each one's backgrounds
// use document.querySelectorAll bc we have a lot of choices, to make sure to get all 6
// select based off of the "class" .square not the container
var squares = document.querySelectorAll(".square");

// next, generate 3 different numbers from 0-255 and then combine them
// so just 3 differen channels, all randomized into one big string with RGB
// start off with hard-coding them in first, say goal color is cyan, not randomized
// cyan is the 4th color, so index of 3
var pickedColor = colors[3];

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