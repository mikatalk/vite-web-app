import '../styles/style.scss'

import './init-pwa';



const grid = document.querySelector('#app .grid');
console.log('grid:', grid)
Array.from({length: 100}).forEach(() => {
  console.log(' -')
  grid.innerHTML += '<div class="box"></div>'
})