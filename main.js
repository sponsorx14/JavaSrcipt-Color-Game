const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const reset = document.querySelector("#reset");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const ez = document.querySelectorAll(".ez");
const chancesContainer = document.querySelector('.chances');

let hardModeOn = true;
let easyModeOn = false;
let chances = 6;
let mode = 6;
let colors = generateRandomColors(mode);
let pickedColor = pickColor();


colorDisplay.textContent = pickedColor;
chancesContainer.textContent = chances;

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
    let arr = [];
    for(let i = 0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b +")";
}

function calcChances() {
	if(hardModeOn) {
		 return chances = 6
	} else {
		return chances = 3;
	}
}

function easyMode(){
		hardModeOn = false;
		easyModeOn = true;
		calcChances();
    mode = 3;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else(
            squares[i].style.display= "none"
        );
    };
    h1.style.backgroundColor= "#4286f4";
    messageDisplay.textContent = "";
		chancesContainer.textContent = chances;
}

function hardMode(){
		easyModeOn = false;
		hardModeOn = true;
		calcChances();
    mode = 6;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
    	squares[i].style.display="block"
    }
    h1.style.backgroundColor= "#4286f4";
    messageDisplay.textContent = "";
		chancesContainer.textContent = chances;
}

function resett(){
		calcChances();
		chancesContainer.textContent = chances;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor= "#4286f4";
    reset.textContent="New Game";
    messageDisplay.textContent = "";
};

for(let i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		const clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
      h1.style.background = clickedColor;
      reset.textContent= "Play Again?";
		} else {
			chances -=1;
			chancesContainer.textContent = chances;
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
