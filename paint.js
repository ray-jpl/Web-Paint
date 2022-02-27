const DEFAULT_SIZE = 16

var grid = document.getElementById("grid");
var clearBtn = document.getElementById("clearBtn")

clearBtn.addEventListener('click', clearGrid)


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
    createGrid(DEFAULT_SIZE);
}

createGrid(DEFAULT_SIZE)
let colourOn = false;
document.body.onmousedown = () => {colourOn = true};
document.body.onmouseup = () => (colourOn = false);


function colourIn(e) {
    // If mouse is clicked then it will fill
    // or if mouse is already held down then it will fill.
    // Checking only if the mouse is held down does not colour in the cell
    // where the mouse clicked down
    if (e.type == 'mousedown' || colourOn) {
        e.target.style.backgroundColor = '#333333';
    }
}


