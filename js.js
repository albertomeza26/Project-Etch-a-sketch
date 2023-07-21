//Create multiple divs using a loop function
for (let i = 0; i <= 15; i++) {
    document.getElementById('sketch').innerHTML += "<div class='box'></div>";
  }
//Change color when each box is clicked
let newClass = document.querySelectorAll('.box');

  newClass.forEach ((newClass) => {
  newClass.addEventListener ( 'mousedown', () => {
    newClass.classList.add('active');
  });
});

//Clear button function to remove active class
let reset = document.querySelector('.reset');

newClass.forEach ((newClass) => {
reset.addEventListener ('click', () => {
  newClass.classList.remove('active');
});
});  
