const container = document.querySelector('.container');

let grid;

function createAGrid(){
    grid = document.createElement('div');
    grid.setAttribute('class', 'colorGrid');
    grid.style.background = 'pink';
    grid.style.width = '16px';
    grid.style.height = '16px';
    return grid;
}
function changeColor(item){
    item.style.background = "red";
    console.log('mouseClicked');
}
for(let i = 0; i < 16; i++){
    for(let i = 0; i < 16; i++){
        container.appendChild(createAGrid());
    }
}


const div = document.querySelectorAll('.colorGrid');

div.forEach(item => {
    item.addEventListener('mouseover', (one) => {
        one = item;
        item.style.background = "red";
    });
});







