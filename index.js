const container = document.getElementById('container-div');
container.style.display = "grid";
container.style.border = "3px solid black"
container.style.margin = "0 auto"

let gridSize = 35;

container.style.setProperty('grid-template-rows', `repeat(${gridSize}, ${(1/gridSize)*600}px)`)
container.style.setProperty('grid-template-columns', `repeat(${gridSize}, ${(1/gridSize)*650}px)`)

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const child = document.createElement('div');
        child.style.border = "1px solid teal";
        child.classList.add('grid-element');
        container.appendChild(child);
    }
}

let grids = document.querySelectorAll('div[class="grid-element"]');
const colors = ['teal', 'blue', 'lightgreen', 'green', 'navyblue', 'navyseagreen', 'black'];

for (let i = 0; i < gridSize * gridSize; i++) {
    grids[i].addEventListener('mouseover', () => {
        let random = Math.floor(Math.random() * colors.length);
        grids[i].style.backgroundColor = colors[random];
    })
}

document.getElementById('reset-button').addEventListener('click', () => {
    for (let i = 0; i < gridSize * gridSize; i++) {
         grids[i].style.backgroundColor = "white";
    }
    gridSize = prompt("Enter new grid size(1-100):")
})