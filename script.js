const grid = document.querySelector('.grid');

const SIDE_LENGTH = 16;

for (let i = 0; i < SIDE_LENGTH*SIDE_LENGTH; ++i) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}