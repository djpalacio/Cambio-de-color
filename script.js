const container = document.querySelector(".container")
const colorpicker = document.querySelector(".colorpicker")
const colorpicker1 = document.querySelector(".colorpicker1")
const letra = document.querySelectorAll(".letra")




colorpicker.addEventListener('input',colorchange)
colorpicker1.addEventListener('input',letterchange)



function colorchange(){
  let color = colorpicker.value;
  container.style.backgroundColor = color;

}

function letterchange(){
  let color = colorpicker1.value
  letra.forEach(le=>{
    le.style.color = color;
  }) 

}