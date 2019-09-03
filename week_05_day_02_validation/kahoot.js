

const trigger = document.querySelector('.activator')
const dropdown = document.querySelector('.dd')

trigger.addEventListener('click', function() {
  dropdown.classList.toggle('active')
})