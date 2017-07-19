let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let messageDisplay = document.getElementById("result");
let colorDisplay = document.getElementById("rgb");
let topNav = document.getElementById("topNav");
let bottomNav = document.getElementById("bottomNav");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    // mode buttons event listeners
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        // add click listeners to the squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            let clickedColor = this.style.backgroundColor;

            // compare color to pickedColor
            if (clickedColor === pickedColor){
                messageDisplay.innerHTML = "Correct!";
                resetButton.innerHTML = "Play Again?";
                messageDisplay.style.color = pickedColor;
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#696969";
                messageDisplay.innerHTML = "Try again";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    resetButton.innerHTML = "New Colors";
    messageDisplay.innerHTML = "";
    topNav.style.backgroundColor = "#db7093";
    resetButton.style.backgroundColor = "#ffffff";
    resetButton.style.color = "#db7093";
    // modeButtons.style.backgroundColor = "#ffffff";
    // modeButtons.style.color = "#db7093";
    messageDisplay.style.color = "#DB7093";

    for(let i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

document.getElementById("rgb").innerHTML = pickedColor;

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    // loop through all squares
    for (let i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
        topNav.style.backgroundColor = color;
        bottomNav.style.color = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    let arr = [];

    // repeat num times
    for(let i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }

    // return that array
    return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    let red = Math.floor(Math.random() * 256);

    // pick a green from 0 - 255
    let green = Math.floor(Math.random() * 256);

    // pick a blue from 0 - 255
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}