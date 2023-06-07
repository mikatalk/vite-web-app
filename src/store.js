import { Cell } from "./js/objects/Cell";
import { Grid } from "./js/objects/Grid";

const state = {
  nextPieces: [],
  grid: new Grid()
};

export const store = {
  state,
  doSomething () {
    state.grid.setCellValueAtIndex(0, Cell.SET)
    state.grid.setCellValueAtPoint(9, 3, Cell.SET)
    state.grid.setCellValueAtPoint(Math.floor(Math.random()*10), Math.floor(Math.random()*10), Cell[Math.random() > 0.5 ? 'SET' : 'UNSET'])
  }
}
