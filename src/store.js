import { Cell } from "./js/objects/Cell";
import { Grid } from "./js/objects/Grid";
import { Piece } from "./js/objects/Piece";

const state = {
  bankPieces: [],
  grid: new Grid(),
  changeId: 0,
};

export const store = {
  state,
  mutate: {
    doSomething () {
      // state.grid.setCellValueAtIndex(0, Cell.SET)
      // state.grid.setCellValueAtPoint(9, 3, Cell.SET)
      state.grid.setCellValueAtPoint(Math.floor(Math.random()*10), Math.floor(Math.random()*10), Cell[Math.random() > 0.5 ? 'SET' : 'UNSET']);
      state.changeId += 1;
    },
    addPieceToBank () {
      state.bankPieces.push(new Piece())
      state.changeId += 1;
    }
  }
}
