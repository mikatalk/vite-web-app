import { Cell } from "./js/objects/Cell";
import { Grid } from "./js/objects/Grid";
import { Piece } from "./js/objects/Piece";

const state = {
  bankPieces: [],
  grid: new Grid(),
  changes: {
    grid: {
      previous: 0,
      value: 1,
    },
    bank: {
      previous: 0,
      value: 1,
    }
  }
};

export const store = {
  state,
  mutate: {
    doSomething () {
      state.grid.setCellValueAtPoint(Math.floor(Math.random()*10), Math.floor(Math.random()*10), Cell[Math.random() > 0.5 ? 'SET' : 'UNSET']);
      state.changes.grid.value += 1;
    },
    addPieceToBank () {
      state.bankPieces.push(new Piece())
      state.changes.bank.value += 1;
    },
    hasRendered (target) {
      state.changes[target].previous = state.changes[target].value;
    },
  },
  getters: {
    // gridChanged: () => {
    //   console.log( state.changes.grid.previous, state.changes.grid.value)

    //   return state.changes.grid.previous !== state.changes.grid.value
    // },
    gridChanged: () => state.changes.grid.previous !== state.changes.grid.value,
    bankChanged: () => state.changes.bank.previous !== state.changes.bank.value,
  }
}
