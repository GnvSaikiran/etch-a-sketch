const container = document.getElementById('container-div');

function sketch(gridSize) {
    container.style.setProperty('grid-template-rows', `repeat(${gridSize}, ${(1 / gridSize) * 600}px)`);
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, ${(1 / gridSize) * 650}px)`);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const child = document.createElement('div');
        child.style.border = "1px solid teal";
        container.appendChild(child);
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = "black";
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
