const container = document.getElementById('container-div');

function sketch(gridSize) {
    container.style.setProperty('grid-template-rows', `repeat(${gridSize}, ${(1 / gridSize) * 600}px)`);
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, ${(1 / gridSize) * 650}px)`);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const child = document.createElement('div');
            child.style.border = "1px solid teal";
            child.classList.add('grid-element');
            container.appendChild(child);
        }
    }

    let grids = document.querySelectorAll('div[class="grid-element"]');

    for (let i = 0; i < gridSize * gridSize; i++) {
        grids[i].addEventListener('mouseover', () => {
            grids[i].style.backgroundColor = "black";
        })
    }
}

sketch(16);

document.getElementById('reset-button').addEventListener('click', resetGrid);

function resetGrid() {
    container.innerHTML = "";

    let newGridSize = prompt("Enter new grid size(1-100):");
    sketch(newGridSize);
}
