let gridNumber = prompt('Enter a number between 1-64. To create your Drawing Grid');
let gridBox = Number(gridNumber);
let boxCount = (gridBox * gridBox);
let pixelCount = (300/gridBox);

//Create multiple divs using a loop function
for (let i = 1; i <= `${boxCount}`; i++) {
    document.getElementById('sketch').innerHTML += "<div class='box'/"+`style="width:${pixelCount}px; height:${pixelCount}px;"`+"></div>";
  }
//Change color when each box is clicked
let newClass = document.querySelectorAll('.box');
let newGrid = document.querySelector('.clear');
let grayscale = document.querySelector('.grayscale');
let borrar = document.querySelector('.borrar');



function draw()  { 
  newClass.forEach ((newClass) => {
  newClass.addEventListener ( 'mouseover', () => {
    newClass.style.backgroundColor = null;
    newClass.classList.add('active');
  }
  );
});
}

//Clear button function to remove active class
let reset = document.querySelector('.reset');

newClass.forEach ((newClass) => {
reset.addEventListener ('click', () => {
  newClass.classList.remove('active');
  newClass.style.backgroundColor = null;
});
}); 


newGrid.addEventListener('click', () => {
  location.reload();}
  );

//Random color function
let rgb = document.querySelector('.rgb');

function rainbow()  { 
    newClass.forEach ((newClass) => {
    newClass.addEventListener ( 'mouseover', () => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      newClass.classList.remove('active');
      newClass.style.backgroundColor = "#" + randomColor;
    }
    );
  });
  }
//Erase background color function
  function remover()  { 
    newClass.forEach ((newClass) => {
    newClass.addEventListener ( 'mouseover', () => {
      newClass.classList.remove('active');
      newClass.style.backgroundColor = null;
    }
    );
  });
  }

rgb.addEventListener('click', rainbow);
grayscale.addEventListener('click', draw);
borrar.addEventListener('click', remover);

