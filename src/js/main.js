import '../styles/style.scss'

import './init-pwa';

import { store } from '../store';


console.log('store:', store)
console.log('cells:', store.state.grid.cells)

const gridElement = document.querySelector('#app .grid');
const cellElements = [];
store.state.grid.cells.forEach(({value}) => {
  const el = document.createElement('div');
  el.classList.add('box');
  value === 'set' && el.classList.add('active');
  cellElements.push(el);
  gridElement.appendChild(el);
})

let lastChangeId = 0, changeId = 1;
update()
store.doSomething();
changeId += 1;

function update () {
  window.requestAnimationFrame(update);
  
  // store.doSomething();

  store.doSomething();
  changeId += 1;
  
  if (lastChangeId !== changeId) {
    lastChangeId = changeId;
    redraw();
  }
  
  // console.log('hi')
}

function redraw() {
  store.state.grid.cells.forEach(({value}, index) => {
    const el = cellElements[index];
    if (value === 'set') {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  })
}