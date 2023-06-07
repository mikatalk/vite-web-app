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
});


const footerElement = document.querySelector('#app .footer .bank');
// const pieceElements = [];
// store.state.bankPieces.forEach((piece) => {
//   const el = document.createElement('div');
//   // create piece image and append to div
//   el.classList.add('piece');
//   pieceElements.push(el);
//   footerElement.appendChild(el);
// });



let lastChangeId = 0;
update()
store.mutate.doSomething();
store.mutate.addPieceToBank();



function update () {
  window.requestAnimationFrame(update);

  store.mutate.doSomething();
  
  if (lastChangeId !== store.state.changeId) {
    lastChangeId = store.state.changeId;
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

  footerElement.innerHTML = '';
  store.state.bankPieces.forEach((piece, index) => {
    // const el = pieceElements[index];
    // console.log('el:', el)
    // footerElement.appendChild(el);
    // if (value === 'set') {
    //   el.classList.add('active');
    // } else {
    //   el.classList.remove('active');
    // }

    const el = document.createElement('div');
    // create piece image and append to div
    el.classList.add('piece');
    footerElement.appendChild(el);
  })
}