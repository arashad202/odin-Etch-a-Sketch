const container = document.querySelector('#container');

let createRow = () => {
    const subcontainer = document.createElement('div');
    subcontainer.setAttribute('class', 'subcontainer');
    container.appendChild(subcontainer);
    for (let i = 0; i <= 16; i ++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        subcontainer.appendChild(square);
    }
}

for (let i = 0; i <= 16; i ++) {
        createRow();
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.setAttribute('class', 'hoverColor');
    });
    square.addEventListener('mouseout', () => {
        square.setAttribute('class', 'square');
    });
});