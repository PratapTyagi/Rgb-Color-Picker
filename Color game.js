// VARIABLE INITIALIZATION
var numSquares = 6;
var colors = randomDistinctcolors(numSquares);
var squares = document.querySelectorAll(".square");
var passedColor = random();
var clrDisplay = document.querySelector("#RGB");
var msgDisplay = document.querySelector("#write");
var jbackground = document.querySelector(".jumbotron");
var btn = document.querySelector("#button");
var modebtn = document.querySelectorAll(".mode");

// FOR DIFFICULTY MODE

for (var i = modebtn.length - 1; i >= 0; i--) {
	modebtn[i].addEventListener("click",function(){
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");		
		this.style.outline = "none";
		this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
		// if (this.textContent === "EASY") {
		// 	numSquares = 3;
		// 	}
		// else{
		// 	numSquares = 6;
		// 	}
		remove(numSquares);

			});
}

// FOR NEW COLORS BUTTON

btn.addEventListener("click",function(){
	
	// FOR UNNECESORY OUTLINE
	btn.style.outline = "none";
	// HIDDEN MSG CHANGES
	msgDisplay.textContent = "";
	// ACCORDING TO MODE
	remove(numSquares);
});

//	CHANGING RGB NUMBER

clrDisplay.textContent = passedColor.toUpperCase(); 

// SQUARE COLORS
for (var i = squares.length - 1; i >= 0; i--) {

	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		if (this.style.backgroundColor === passedColor) {
			msgDisplay.textContent = "CORRECT !!";
			btn.textContent = "PLAY AGAIN ?";
			sameColor(passedColor);
		}
		else{
			this.style.backgroundColor = "rgb(0, 0, 0)"; 
			msgDisplay.textContent = "TRY AGAIN !!";
		}

	});
	
}

// FUNCTION FOR REMOVING EXTRA SQUARES

function remove(numSquares){

	colors = randomDistinctcolors(numSquares);
	// RANDOM COLOR
	passedColor = random();
	// RGB CHANGES
	clrDisplay.textContent = passedColor.toUpperCase();
	// AFTER USER CLICKS PLAY AGAIN CHANGES OCCURED:
	btn.textContent = "NEW COLORS !!";
	// SQUARE COLOR CHANGES
	for (var i = squares.length-1; i >= 0; i--) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
	 					} 
	 	else{
			squares[i].style.display = "none";
						}		
		}
	jbackground.style.backgroundColor = "steelblue";

}

// FUNCTION FOR SAME COLOR

function sameColor(color){

	for (var i = squares.length - 1; i >= 0; i--) {
	 	squares[i].style.backgroundColor = color;
	 	jbackground.style.backgroundColor = color;
	}

}

// FUNCTION FOR RANDOM COLORS FROM COLORS

function random(){

	var r= Math.floor(Math.random() * colors.length);
	return colors[r];

}

// FUNCTION FOR 255 RANDOM COLORS
 
function randomDistinctcolors(num){

	// CREATING ARRAY
	var arr = [];
	// INSERTING VALUES
	for (var i = 0; i < num; i++) {
		arr[i] = pickedRandomColor();
	}
	// RETURNING ARRAY OF COLORS
	return arr;

}

// FUNCTION OF PICKED RANDOM SINGLE COLOR

function pickedRandomColor(){

	// FOR RED
	var r = Math.floor(Math.random()*256);
	// FOR GREEN
	var g = Math.floor(Math.random()*256);
	// FOR BLUE
	var b = Math.floor(Math.random()*256);

	return "rgb(" +r+ ", " +g+ ", " +b+ ")";

}