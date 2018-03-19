var mode = 6;
var colors = generateRandomColors(mode);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var ez = document.querySelectorAll(".ez");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
            h1.style.background = clickedColor;
            reset.textContent= "Play Again?"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
};

reset.addEventListener("click", function(){
    resett();
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    hardMode();
});

easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    easyMode();                
});



function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    
    return arr;
};

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);        
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b +")";
};

function easyMode(){
    mode = 3; 
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else(
            squares[i].style.display= "none"
        );
    };
    h1.style.backgroundColor= "steelblue";
    messageDisplay.textContent = "";
};

function hardMode(){
    mode = 6;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
    squares[i].style.display="block"    
    };
    h1.style.backgroundColor= "steelblue";
    messageDisplay.textContent = "";
};

function resett(){
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor= "steelblue";
    reset.textContent="New Game";
    messageDisplay.textContent = "";
};

