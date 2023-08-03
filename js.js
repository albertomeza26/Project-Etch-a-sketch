let output = document.getElementById("demo");
let grid = document.querySelector('#sketch');
let gridP = document.querySelector('.whitespace');
let rgb = document.querySelector('.rgb');
let redraw = document.querySelector('.redraw');
let renovar = document.querySelector('.reset');
let grayscale = document.querySelector('.grayscale');
let borrar = document.querySelector('.borrar');
let enBlanco = document.querySelector('.clear');

function removeAllChildNodes(parent){
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

//Create multiple divs using a loop function
function createGrid () {
  let gridStart = 16;
  let gridBox = Number(gridStart);
  let boxCount = (gridBox * gridBox);
  let pixelCount = (300/gridBox);
for (let i = 1; i <= boxCount; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.style.width = pixelCount+'px';
    div.style.height = pixelCount+'px';
    grid.appendChild(div);
    output.innerHTML = "Gridsize: "+gridStart+" X "+gridStart; 
  }
}
//Create a new grid
function reCreateGrid () {
  removeAllChildNodes(grid);
  let gridStart = prompt('Enter new grid size. 1-100');
  let gridBox = Number(gridStart);
  let boxCount = (gridBox * gridBox);
  let pixelCount = (300/gridBox);
for (let i = 1; i <= boxCount; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.style.width = pixelCount+'px';
    div.style.height = pixelCount+'px';
    grid.appendChild(div);
    output.innerHTML = "Gridsize: "+gridStart+" X "+gridStart; 
  }
}

//Function to draw in grays
function draw() { 
  let cell = document.querySelectorAll('.cell');
  cell.forEach((cell) => {
  cell.addEventListener ( 'mouseover' || 'touchmove', () => {
    cell.style.backgroundColor = 'gray';
  }
  );
}
  )
}

//Random color function
  function rainbow() { 
    let cell = document.querySelectorAll('.cell');
    cell.forEach((cell) => {
    cell.addEventListener ( 'mouseover' || 'touchmove', () => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      cell.style.backgroundColor = "#" + randomColor;
    }
    );
  }
    )
  }
//Erase background color function
function borrador() { 
  let cell = document.querySelectorAll('.cell');
  cell.forEach((cell) => {
  cell.addEventListener ( 'mouseover' || 'touchmove', () => {
    cell.style.backgroundColor = null;
  }
  );
}
  )
}
//Clear current grid from all colors
function aclarar() { 
  let cell = document.querySelectorAll('.cell');
  cell.forEach((cell) =>
  cell.style.backgroundColor = null);
}



//Reset button function to reset grid back to 16x16
renovar.addEventListener ('click', () => {
  location.reload();
  }
  )
  
rgb.addEventListener('click', () => {rainbow()});
grayscale.addEventListener ('click', () => {draw()});
redraw.addEventListener('click', () => {reCreateGrid()});
borrar.addEventListener('click', () => {borrador()});
enBlanco.addEventListener('click', () => {aclarar()}); 

createGrid();
