
// Define variables
const circle = document.querySelector('#circle')
let count = 0;


circle.addEventListener('click', e =>{
  count++;
  createBox()
  displayCount(count)
  changeBG()
})

// This function will create a box using in the page on a random X Y position
function createBox (){
  const randomX = Math.floor((Math.random() * window.innerWidth) +1) ; //'random number between 0 and window width -100'
  const randomY = Math.floor((Math.random() * window.innerHeight) +1) ; //'random number between 0 and window height -100'

  const box = document.createElement('div')
  box.setAttribute('class','box')
  document.querySelector('main').appendChild(box)
  box.setAttribute('style',`left: ${randomX}px; top: ${randomY}px`)
}

// This function will display the number of clicks
function displayCount (){
  
  if(!document.querySelector('.counter')){
    const counter = document.createElement('h2')
    counter.setAttribute('class', 'counter')
    document.querySelector('main h1').after(counter)
  }
  document.querySelector('.counter').innerHTML = `Times clicked: ${count}`
}

// This function will change the background of the squares
function changeBG (){

  const boxes = document.querySelectorAll('.box')

  for (let i = 0; i < boxes.length && i < 255; i++) {
    boxes[i].style.backgroundColor = `rgb(${i},${i},${i})`
  }


}