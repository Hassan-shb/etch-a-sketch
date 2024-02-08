const container = document.querySelector(".container");
const comStyle = window.getComputedStyle(container);
let colorPicker = document.getElementById('myColor');
const myEraser = document.getElementById('myEraser');
const rainbow = document.getElementById('Rainbow');
const sliderLabel = document.querySelector('.sliderLabel');
const colorMode = document.getElementById('colorMode');
const slider = document.querySelector('.slider');
const resetBtn = document.querySelector('.reset');


resetBtn.addEventListener('click', () => {
    container.innerHTML = "";
    slider.value = 16;
    sliderLabel.textContent = `${slider.value}x${slider.value}`;
    createGrid(16);
});


createGrid(slider.value);
slider.addEventListener('mousemove', () => {sliderLabel.textContent = `${slider.value} x ${slider.value}`});
slider.addEventListener('change', () => {
    container.innerHTML = '';
    createGrid(slider.value);
})
colorMode.checked = true;

let isRainbow = false;
let rainbowColor;
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
    pixel.style.background = "white";
    pixel.classList.add("colorGrid");
    pixel.addEventListener("mousedown", (e) => {
        if(myEraser.checked == true){
            e.target.style.background = "white";
            isDrawing = true;
            changeColor("white");
        }else if(rainbow.checked == true){
            e.target.style.background = rainbowGenerator();
            rainbowColor = rainbowGenerator();
            changeColor(rainbowColor);
            isDrawing = true;
        }else if(colorMode.checked == true){
            colorPicker.addEventListener('input', function() {
                selectedColor = colorPicker.value;
            });
            e.target.style.background = selectedColor;
            isDrawing = true;
            changeColor(selectedColor);
        } else{
            console.log("do nothing");
        }
        
    });
    pixel.addEventListener("mouseup", () => {
        isDrawing = false;
        changeColor();
    });
    
    container.appendChild(pixel);
}

function changeColor(color) {
    container.addEventListener("mouseover", (e) => {
        console.log(e.target);
        if(isDrawing && rainbow.checked == true){
            rainbowColor = rainbowGenerator();
            e.target.style.background = rainbowColor;
        }else if(isDrawing){
            e.target.style.background = color;
        }
    });
}
function rainbowGenerator(){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R},${G}, ${B})`;
}
function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        createAGrid(size);
    }
}


