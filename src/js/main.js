import '../styles/style.scss'

import './utils/init-pwa';

import { store } from '../store';
import { Assets } from './utils/Assets';


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


Assets.loadImages(
  [
    { name: '', url: 'src/imgs/tile.png' }
  ],
  progress => console.log('Progress:', progress),
  () => {
    // store.mutate.doSomething();
    store.mutate.addPieceToBank();
    store.mutate.addPieceToBank();
    store.mutate.addPieceToBank();
    update()
  }
);




function update () {
  window.requestAnimationFrame(update);
  
  // store.mutate.doSomething();
  
  if (store.getters.gridChanged()) {
    redrawGrid();
  }
  if (store.getters.bankChanged()) {
    redrawBank();
  }
}

function redrawGrid() {
  console.log('redraw grid')
  store.state.grid.cells.forEach(({value}, index) => {
    const el = cellElements[index];
    if (value === 'set') {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  })
  store.mutate.hasRendered('grid')
}

function redrawBank() {
  console.log('redraw bank')
  
  footerElement.innerHTML = '';
  store.state.bankPieces.forEach((piece, index) => {
    const el = document.createElement('div');
    
    el.appendChild(piece.thumbnail);
    el.classList.add('piece');
    footerElement.appendChild(el);
  })
  store.mutate.hasRendered('bank')
}