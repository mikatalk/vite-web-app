import '../styles/style.scss'

import './utils/init-pwa';

import { store } from '../store';
import { Assets } from './utils/Assets';
import { Draggable } from './objects/Draggable';


console.log('store:', store)
console.log('cells:', store.state.grid.cells)

const gridElement = document.querySelector('#app .grid');
const cellElements = [];
store.state.grid.cells.forEach(({ value }) => {
  const el = document.createElement('div');
  el.classList.add('box');
  value === 'set' && el.classList.add('active');
  cellElements.push(el);
  gridElement.appendChild(el);
});


const footerElement = document.querySelector('#app .footer .bank');
const bankPiecesElements = [...footerElement.querySelectorAll('.next.piece img')];
const pieceBackupElement = footerElement.querySelector('.backup.piece img');

const draggable = new Draggable([...bankPiecesElements, pieceBackupElement], gridElement,
  (action, data) => {
    switch (action) {
      case 'drag':
        console.log('DRAG', data)
        break;
      case 'drop':
        console.log('DROP', data)
        break;
      case 'move':
        console.log('MOVE', data)
        break;
    }
  });

import imgTile from './../imgs/tile.png'
import imgTileHighlight from './../imgs/tile-highlight.png'
import imgTileHover from './../imgs/tile-hover.png'
Assets.loadImages(
  [
    { name: 'tile', url: imgTile },
    { name: 'tile-highlight', url: imgTileHighlight },
    { name: 'tile-hover', url: imgTileHover },
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




function update() {
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
  store.state.grid.cells.forEach(({ value }, index) => {
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
    bankPiecesElements[index].setAttribute('piece-type', piece.type);
  });
  pieceBackupElement.src = store.state.backupPiece.thumbnail.src;
  pieceBackupElement.setAttribute('piece-type', store.state.backupPiece.type);
  store.mutate.hasRendered('bank')
}