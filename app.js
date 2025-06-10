const container = document.querySelector('#container');
const setSize = document.querySelector('.setSize');
let size = 16;

let createRow = (size) => {
    const subcontainer = document.createElement('div');
    subcontainer.setAttribute('class', 'subcontainer');
    container.appendChild(subcontainer);
    
    for (let i = 0; i <= size; i ++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');

        square.addEventListener('mouseover', () => {
        square.setAttribute('class', 'hoverColor');
        });

        // square.addEventListener('mouseout', () => {
        // square.setAttribute('class', 'square');
        // });

        subcontainer.appendChild(square);
    }
}

for (let i = 0; i <= size; i ++) {
        createRow(size);
}

setSize.addEventListener('click', () => {
    size = prompt('How many squares per side? (max 100)');
    if (size > 100) {
        alert("A larger number of squares more than 100 results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.");
        size = 100;
    }

    // const subcontainer = document.querySelectorAll('div.subcontainer');


    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i <= size; i ++) {
            createRow(size);
    }
})



// const squares = document.querySelectorAll('.square');

// squares.forEach(square => {
//     square.addEventListener('mouseover', () => {
//         square.setAttribute('class', 'hoverColor');
//     });
//     square.addEventListener('mouseout', () => {
//         square.setAttribute('class', 'square');
//     });
// });