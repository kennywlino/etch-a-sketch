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

createGrid(16);
