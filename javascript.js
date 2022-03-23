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

createGrid(16);
