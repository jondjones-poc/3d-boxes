const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

const createBox = (y, x) => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundPosition = `${-y * 125}px ${-x * 125}px`;
    boxesContainer.appendChild(box);
}

const createBoxes = () => {
    for(let x = 0; x < 4; x++) {
        console.log(1)
        for(let y = 0; y < 4; y++) {
            createBox(y, x);
        }
    }
}

btn.addEventListener('click', () => {
    boxes.classList.toggle('big');
})

createBoxes();