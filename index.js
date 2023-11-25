const container = document.querySelector(".container");
const comStyle = window.getComputedStyle(container);
let colorPicker = document.getElementById('myColor');
let selectedColor = colorPicker.value;

let isDrawing = false;

const defaultColor = "red";
function createAGrid(item) {
    let pixel = document.createElement("div");
    let width = comStyle.getPropertyValue("width");
    width = `${+width.slice(0, 3) / item}px`;
    let height = width;
    pixel.style.width = width;
    pixel.style.height = height;
    pixel.style.border = "0.5px solid gray";
    pixel.style.background = "pink";
    pixel.classList.add("colorGrid");
    
    pixel.addEventListener("mousedown", (e) => {
        colorPicker.addEventListener('input', function() {
            selectedColor = colorPicker.value;
          });
        e.target.style.background = selectedColor;
        isDrawing = true;
        changeColor();
    });
    pixel.addEventListener("mouseup", () => {
        isDrawing = false;
    });
    
    container.appendChild(pixel);
}
function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        createAGrid(size);
    }
}
function changeColor() {
    container.addEventListener("mouseover", (e) => {
        if(isDrawing){
            colorPicker.addEventListener('input', function() {
                selectedColor = colorPicker.value;
              });
            e.target.style.background = selectedColor;
        }
    });
}



createGrid(16);

