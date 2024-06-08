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
            const randomColor = `${getRandomHEXCode()}`;
            if (!e.target.style.backgroundColor)
                e.target.style.backgroundColor = `${randomColor}`;
            else {
                if (!e.target.style?.filter) {
                    e.target.style.filter = `brightness(0.9)`;
                } else {
                    const currentBrightness = +e.target.style.filter.split('(')[1].split(')')[0];
                    if (currentBrightness != 0)
                        e.target.style.filter = `brightness(${currentBrightness - 0.1})`;
                }
                
            }
        });
        grid.appendChild(cell);
    }
}

function getRandomHEXCode() {
    const randomNumber = Math.random();
    const upperBound = 0xffffff;
    const lowerBound = 1;
    const range = upperBound - lowerBound;
    const randomHEXNumbers = (randomNumber * range).toString(16);
    const randomHEXCode = `#${randomHEXNumbers.split('.')[0]}`;
    return randomHEXCode;
}

drawGridCells(DEFAULT_SIDE_LENGTH);