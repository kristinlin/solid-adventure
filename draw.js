var board = document.getElementById("board");
var clear = document.getElementById("clear");

var draw = function(e) {
    console.log( e.offsetX )
    console.log( e.offsetY )
    var circle = document.createElementNS("http://www.w3.org/2000/svg",
					  "circle");
    circle.setAttribute("cx", "100");
    circle.setAttribute("cy", "100");
    circle.setAttribute("r", "10");
    board.appendChild(circle);
}

var clearing = function(e) {
    while (board.hasChildNodes()) {
	board.removeChild(board.childNodes[0]);
    }
}

board.addEventListener("click", draw);
clear.addEventListener("click", clearing);
