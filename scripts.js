let dimensions = 16;
const gridContainer = document.querySelector('.grid-container');


//establish starting grid
function startingGrid () {
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
//clear button should clear sketch
//grid button should ask how big grid should be
//user-defined grid should be established