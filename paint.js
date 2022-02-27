const DEFAULT_SIZE = 16;
const DEFAULT_COLOUR = "#000000";

var currSize = DEFAULT_SIZE;
var currColour = DEFAULT_COLOUR;

var grid = document.getElementById("grid");
var clearBtn = document.getElementById("clearBtn");
var eraserBtn = document.getElementById("eraserBtn");
var sizeSlider = document.getElementById("sizeSlider");
var sizeOutput = document.getElementById("sizeOutput");

clearBtn.addEventListener('click', clearGrid);
eraserBtn.addEventListener('click', () => {currColour = '#FFFFFF';});

sizeOutput.innerHTML = sizeSlider.value;
sizeSlider.oninput = function() {
    sizeOutput.innerHTML = this.value;
    currSize = this.value
    clearGrid();
};


// Prevents ghosting image when drag/drop is attempted by mousedown Event
grid.ondragstart = function() {
    return false;
};

function createGrid(size) {
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-columns', size);
    for (var rows=0; rows < size; rows++) {
        for (var col=0; col< size; col++) {
            var cell = document.createElement("div")
            cell.addEventListener('mousedown', colourIn);
            cell.addEventListener('mouseover', colourIn);
            grid.appendChild(cell).className="cell";
        }
    }
}

function clearGrid() {
    grid.innerHTML = '';
    createGrid(currSize);
}


let colourOn = false;
grid.onmousedown = () => {colourOn = true};
grid.onmouseup = () => (colourOn = false);


function colourIn(e) {
    // If mouse is clicked then it will fill
    // or if mouse is already held down then it will fill.
    // Checking only if the mouse is held down does not colour in the cell
    // where the mouse clicked down
    if (e.type == 'mousedown' || colourOn) {
        e.target.style.backgroundColor = currColour;
    }
}

window.onload = () => {
    // Resets values when reloading page
    createGrid(DEFAULT_SIZE);
    sizeSlider.value = DEFAULT_SIZE;
    sizeOutput.innerHTML = DEFAULT_SIZE
}
