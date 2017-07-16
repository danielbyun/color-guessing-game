let colors = [
    "rgb(225, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];

for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to the squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        // compare color to pickedColor
        if (clickedColor === pickedColor){
            alert("correct!");
        } else {
            alert("no");
        }
    })
}

document.getElementById("rgb").innerHTML = pickedColor;

