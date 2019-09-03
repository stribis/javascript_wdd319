

const dropdown = document.querySelector('.dd')
const activator = document.querySelector('.activator')


activator.addEventListener('click',()=>{
  dropdown.classList.toggle('active')
})

