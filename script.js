let gridSide = 16;
const gridContainer = document.querySelector("#container")
let newGridSide;

function gridCalc(gridSide) {
    gridSize = gridSide ** 2;
    return gridSize;
}

function createDivs(gridSize) {
    for(let i = 1; i <= gridSize; i++) {
        let newSquare = document.createElement("div");
        newSquare.classList = "gridSquare";
        newSquare.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(newSquare);
    }
}

function changeColor(cell) {
    cell.target.style.backgroundColor = "#000000";
}

function erase(){
    let allCells = document.querySelectorAll(".newSquare").forEach(cell => {
        cell.style.backgroundColor = "white";
    })
};

function cssChange(newGridSide) {
    document.getElementById("container").style.gridTemplateRows=`repeat(${newGridSide}, 1fr)`;
    document.getElementById("container").style.gridTemplateColumns=`repeat(${newGridSide}, 1fr)`;
}

function reset() {
    erase();
    newGridSide = prompt("Enter a new grid size (1 - 100)");
    cssChange(newGridSide);
    let newGridSize = gridCalc(newGridSide);
    createDivs(newGridSize);

}

cssChange(gridSide);
gridSize = gridCalc(gridSide);
createDivs(gridSize);

const btn = document.querySelector("#reset");
btn.addEventListener('click', () => {
    reset();
})






