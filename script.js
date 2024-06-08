const grid = document.querySelector('.grid');
const promptButton = document.querySelector('.prompt.button');
const DEFAULT_SIDE_LENGTH = 16;
const VISITED_COLOR = '#303030';

promptButton.addEventListener('click', (e) => {
    const newGridSideLength = prompt('Please enter the number of squares per side of the grid:');
    if (Number.isNaN(+newGridSideLength))
        return

    grid.replaceChildren();
    drawGridCells(+newGridSideLength);
});

function drawGridCells(gridSideLength) {
    for (let i = 0; i < gridSideLength*gridSideLength; ++i) {
        const cell = document.createElement('div');
        const cellSize = 100 / gridSideLength;
        cell.classList.add('cell');
        cell.style.flex = `0 0 ${cellSize}%`;
        cell.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = VISITED_COLOR;
        });
        grid.appendChild(cell);
    }
}

drawGridCells(DEFAULT_SIDE_LENGTH);