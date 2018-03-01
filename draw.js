// attributes
var board = document.getElementById("board");
var clear = document.getElementById("clear");
var prev_x = -1;
var prev_y = -1;

// if there was a previous coors, draw line; draw circle
var draw = function(e) {
    if (prev_x > -1) {
	lining(e.offsetX, e.offsetY);
    }
    circling(e.offsetX, e.offsetY);
}

// create circle element; add attributes; append child
var circling = function(x, y) {
    var cic = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cic.setAttribute("cx", x.toString());
    cic.setAttribute("cy", y.toString());
    cic.setAttribute("r", "10");
    cic.setAttribute("fill", "#23D404");
    board.appendChild(cic);
    prev_x = x;
    prev_y = y;
}

//draw line from previous x and y to now circle x and y
var lining = function(x, y) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", prev_x.toString());
    line.setAttribute("y1", prev_y.toString());
    line.setAttribute("x2", x.toString());
    line.setAttribute("y2", y.toString());
    line.setAttribute("stroke", "black");
    board.appendChild(line);
}

//delete all child nodes and reseting previous x and y
var clearing = function(e) {
    while (board.hasChildNodes()) {
	board.removeChild(board.childNodes[0]);
    }
    prev_x = -1;
    prev_y = -1;
}

board.addEventListener("click", draw);
clear.addEventListener("click", clearing);
