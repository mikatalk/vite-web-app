import '../styles/style.scss'

import './init-pwa';

import { store } from '../store';


console.log('store:', store)
console.log('cells:', store.state.grid.cells)

const gridElement = document.querySelector('#app .grid');
update()

function update () {
  store.doSomething();
  redraw();
  window.requestAnimationFrame(update);
  // console.log('hi')
}

function redraw() {
  gridElement.innerHTML = '<div class="grid-bg"></div>'
  store.state.grid.cells.forEach(({value}) => {
    console.log(' -')
    gridElement.innerHTML += `<div class="box ${value === 'set' ? 'active' : ''}"></div>`
  })
}