const grid = document.querySelector('.grid');

const SIDE_LENGTH = 16;
const VISITED_COLOR = '#303030';

for (let i = 0; i < SIDE_LENGTH*SIDE_LENGTH; ++i) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = VISITED_COLOR;
    });
    grid.appendChild(cell);
}

