import '../styles/style.scss'

import './utils/init-pwa';

import { store } from '../store';
import { Assets } from './utils/Assets';
import { Draggable } from './objects/Draggable';

const { state, getters } = store;
const { grid } = state;
const { cells } = grid;

const gridElement = document.querySelector('#app .grid');
const cellElements = [];
cells.forEach(({ value }) => {
  const el = document.createElement('div');
  el.classList.add('box');
  value === Cell.SET && el.classList.add('active');
  cellElements.push(el);
  gridElement.appendChild(el);
});


const scoreText = document.querySelector('#app .score-header .score-value');
const footerElement = document.querySelector('#app .footer .bank');
const bankPiecesElements = [...footerElement.querySelectorAll('.next.piece img')];
const pieceBackupElement = footerElement.querySelector('.backup.piece img');

const draggable = new Draggable([...bankPiecesElements, pieceBackupElement], gridElement,
  (action, data) => {
    const { x, y, pieceId } = data;
    const element = document.getElementById(pieceId);
    const piece = getters.getPieceById(pieceId);
    switch (action) {
      case 'rotate':
        console.log('ROTATE', element);
        piece.rotatePiece();
        // element.src = piece.thumbnail.src;
        element.src = piece.imageString;
        element.style.opacity = 1;
        // state.changes.bank.value += 1;

        break
      case 'drag':
        {
          element.style.opacity = 0;
        }
        break;
      case 'move':
        const { points } = piece.polyline;
        const fit = grid.doesItFitAt(x, y, points, Cell.PREVIEW);
        state.changes.grid.value += 1;
        break;
      case 'drop':
        {
          if (x > 0.75 && y > 1 && store.getters.canAcceptBackup()) {
            console.log('BANK DROP!');
            store.mutate.setBackupPiece(piece);
            store.mutate.removeFromBank(piece);
            return
          }
          const { points } = piece.polyline;
          const fit = grid.doesItFitAt(x, y, points, Cell.SET);
          if (fit) {
            store.mutate.bumpScoreBy(points.length);
            store.mutate.removeFromBank(piece);
            store.mutate.checkWins();
            // piece.disable();
            element.style.opacity = 0;
          } else {
            element.style.opacity = 1;
          }
          state.changes.grid.value += 1;
        }
        break;
    }
  });

import imgTile from './../imgs/tile.png'
import imgTileHighlight from './../imgs/tile-highlight.png'
import imgTileHover from './../imgs/tile-hover.png'
import { Cell } from './objects/Cell';
import { Piece } from './objects/Piece';
Assets.loadImages(
  [
    { name: 'tile', url: imgTile },
    { name: 'tile-highlight', url: imgTileHighlight },
    { name: 'tile-hover', url: imgTileHover },
  ],
  progress => console.log('Progress:', progress),
  () => {
    store.mutate.resetBank();
    update()
  }
);




function update() {
  window.requestAnimationFrame(update);

  // store.mutate.doSomething();

  if (getters.gridChanged()) {
    redrawGrid();
    redrawScore();
  }
  if (getters.bankChanged()) {
    redrawBank();
  }
}

function redrawScore() {
  scoreText.innerHTML = state.score.toLocaleString();
}

function redrawGrid() {
  console.log('redraw grid')
  cells.forEach(({ value }, index) => {
    const el = cellElements[index];
    // reset classes
    el.className = 'box ' + value;
  })
  store.mutate.hasRendered('grid')
}

function redrawBank() {
  console.log('redraw bank')
  store.state.bankPieces.forEach((piece, index) => {
    // bankPiecesElements[index].src = piece.thumbnail.src;
    bankPiecesElements[index].src = piece.imageString;
    bankPiecesElements[index].setAttribute('piece-type', piece.type);
    bankPiecesElements[index].style.opacity = 1;
  });
  // pieceBackupElement.src = store.state.backupPiece.thumbnail.src;
  pieceBackupElement.src = store.state.backupPiece.imageString;
  pieceBackupElement.style.opacity = 1;
  pieceBackupElement.setAttribute('piece-type', store.state.backupPiece.type);
  store.mutate.hasRendered('bank');

}

console.log('v1')