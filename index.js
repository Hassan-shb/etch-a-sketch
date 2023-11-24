const container = document.querySelector('.container');
let grid;
function createAGrid(){
    grid = document.createElement('div');
    grid.setAttribute('class', 'colorGrid');
    grid.style.width = `16px`;
    grid.style.height = '16px';
    return grid;
}
for(let i = 0; i < 16 * 16; i++){
    container.appendChild(createAGrid());
}
const div = document.querySelectorAll('.colorGrid');
let isDrawing = false;
container.addEventListener('mousedown', () => {
    isDrawing = true;
});
container.addEventListener('mouseup', () => {
    isDrawing = false;
});
function changeColor(){
    div.forEach(item => {
        item.addEventListener('mousemove',(e) => {
            if(isDrawing){
                e.target.style.background = "pink";
            } 
        });
        
        
    });
}
container.addEventListener('mousedown', changeColor);




















