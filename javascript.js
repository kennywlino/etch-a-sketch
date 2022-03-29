// etch-a-sketch

// get max width
// pixel size = divide max width by size
// set flex-basis and height to pixel-size

function createGrid(size) {
    let divContainer = document.getElementById('container');
    let totalDivs = size * size;
    for (let i = 1; i <= totalDivs; i++) {
        const div = document.createElement('div');
        // div.textContent = i.toString();
        divContainer.appendChild(div);
    }
}

function updateCss(size) {
    const divContainer = document.getElementById('container');
    const pixels = document.querySelectorAll('#container div');
    let width = window.getComputedStyle(divContainer).width;
    width = Number(width.match(/\d+/)); // digits only
    let pixelSize = width / size;
    pixelSize = pixelSize + 'px';
    // pixel.setAttribute('flex-basis', `${pixel-size}px`);
    // pixel.setAttribute('height', `${pixel-size}px`);
    pixels.forEach((pixel) => {
        pixel.style.flexBasis = pixelSize;
        pixel.style.height = pixelSize;
    });
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
