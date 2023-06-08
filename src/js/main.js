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
const bankPiecesElements = [...footerElement.querySelectorAll('.next.piece img')];
const pieceBackupElement = footerElement.querySelector('.backup.piece img');
// const pieceElements = [];
// store.state.bankPieces.forEach((piece) => {
//   const el = document.createElement('div');
//   // create piece image and append to div
//   el.classList.add('piece');
//   pieceElements.push(el);
//   footerElement.appendChild(el);
// });

import imgTile from 'src/imgs/tile.png'
Assets.loadImages(
  [
    { name: 'tile', url: imgTile },
    { name: 'tile-highlight', url: 'src/imgs/tile-highlight.png' },
    { name: 'tile-hover', url: 'src/imgs/tile-hover.png' },
  ],
  progress => console.log('Progress:', progress),
  () => {
    // store.mutate.doSomething();
    store.mutate.addPieceToBank();
    store.mutate.addPieceToBank();
    store.mutate.addPieceToBank();
    store.mutate.addBackupPiece();
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
  store.state.bankPieces.forEach((piece, index) => {
    bankPiecesElements[index].src = piece.thumbnail.src;
  });
  pieceBackupElement.src = store.state.backupPiece.thumbnail.src;
  store.mutate.hasRendered('bank')
}