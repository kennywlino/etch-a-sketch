// etch-a-sketch

function createGrid(size) {
    divContainer = document.getElementById('container');
    totalDivs = size * size;
    for (let i = 1; i < totalDivs; i++) {
        const div = document.createElement('div');
        div.textContent = i.toString();
        divContainer.appendChild(div);
    }
}

function setUpColorEventListener() {
    divContainer = document.getElementById('container');
    pixelDivs = Array.from(divContainer.children);
    pixelDivs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            // change the color of the div
            div.classList.add('filled');
        });
    });   
}

function clearGrid() {
    divContainer = document.getElementById('container');
    pixelDivs = Array.from(divContainer.children);
    pixelDivs.forEach((div) => {
        div.classList.remove('filled');
    });
}

function deleteGrid() {
    divContainer = document.getElementById('container');
    divContainer.innerHTML = ''; 
}

function promptNewGrid() {
    const size = Number(prompt("Grid size?", "16"));
    deleteGrid();
    createGrid(size);
    updateCss(size);
    setUpColorEventListener();
}

function setUpButtonEventListeners() {
    resetBtn = document.getElementById("reset-button");
    resetBtn.addEventListener('click', () => {
        clearGrid();
    });
    newGridBtn = document.getElementById("new-grid-button");
    newGridBtn.addEventListener('click', () => {
        promptNewGrid();
    });
}

createGrid(16);
