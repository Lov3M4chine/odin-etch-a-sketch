let dimensions = 16;
let isMouseDown = false;
const gridContainer = document.querySelector('.grid-container');
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', clear);


//establish starting grid
function startingGrid () {
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

startingGrid ();

//change grid colors when mouse is dragged over
function changeGridColor () {
    document.addEventListener('mousedown', function () {
        isMouseDown = true;
    });
    document.addEventListener('mouseup', function () {
        isMouseDown = false;
    });
    document.addEventListener('mousemove', function (e) {
        if (isMouseDown) {
            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
            if (hoveredElement && hoveredElement.classList.contains('grid-block')) {
                hoveredElement.classList.add('activated');
            }
        }
    });
    document.addEventListener('click', function(e) {
        const element = e.target;
        if (element && element.classList.contains('grid-block')) {
            element.classList.add('activated');
        }
    })
}

changeGridColor ();

//clear button should clear sketch
function clear () {
    const gridDiv = document.querySelectorAll('.grid-block');
    gridDiv.forEach(block => {
        block.classList.remove('activated');
    });
}


//grid button should ask how big grid should be
//user-defined grid should be established