var grid = document.getElementById("grid");

function createGrid(size) {
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-columns', size);
    for (var rows=0; rows < size; rows++) {
        for (var col=0; col< size; col++) {
            var cell = document.createElement("div")
            grid.appendChild(cell).className="cell";
        }
    }
}

createGrid(16);
