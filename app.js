const container = document.querySelector('#container');

for (let i = 0; i <= 16; i ++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square')
    container.appendChild(square);
}


container.style.display = 'flex';
container.style.gap = '10px'