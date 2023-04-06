let dimensions = 16;
let isMouseDown = false;
const gridContainer = document.querySelector('.grid-container');
const clearButton = document.getElementById('clear-button');
const setGridButton = document.getElementById('set-grid-button');

//establish starting grid
function setGrid () {
    if (dimensions > 100) {
        dimensions = 100;
    }
    gridContainer.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

    for (let i = 0; i < dimensions; i++) {
        for (let j =0; j < dimensions; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.className = "grid-block";
            gridContainer.appendChild(gridDiv);
        }
    }
}

//change grid colors when mouse is dragged over
function changeGridColor () {
    gridContainer.addEventListener('mousedown', function (e) {
      if (e.target && e.target.classList.contains('grid-block')) {
        e.target.classList.add('activated');
        isMouseDown = true;
      }
    });
    gridContainer.addEventListener('mouseup', function () {
      isMouseDown = false;
    });
    gridContainer.addEventListener('mousemove', function (e) {
      if (isMouseDown && e.target && e.target.classList.contains('grid-block')) {
        e.target.classList.add('activated');
      }
    });
  }

//clear button should clear sketch
function clear () {
    const gridDiv = document.querySelectorAll('.grid-block');
    gridDiv.forEach(block => {
        block.classList.remove('activated');
    });
}

//grid button should ask how big grid should be
function dimensionPrompt () {
    dimensions = parseInt(prompt("Enter your desired dimensions - maximum 100 (ex. 5 would be a grid 5x5)"));
    setGrid();
}

clearButton.addEventListener('click', clear);
setGridButton.addEventListener("click", dimensionPrompt);
setGrid ();
changeGridColor ();
