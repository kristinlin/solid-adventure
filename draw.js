
var board = document.getElementById("board");
var clear = document.getElementById("clear");

// create new element; add x, y, r, and fill color; append child
var draw = function(e) {
    var cic = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cic.setAttribute("cx", e.offsetX.toString());
    cic.setAttribute("cy", e.offsetY.toString());
    cic.setAttribute("r", "10");
    cic.setAttribute("fill", "#23D404");
    board.appendChild(cic);
}

//delete all child nodes
var clearing = function(e) {
    while (board.hasChildNodes()) {
	board.removeChild(board.childNodes[0]);
    }
}

board.addEventListener("click", draw);
clear.addEventListener("click", clearing);
