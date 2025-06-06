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