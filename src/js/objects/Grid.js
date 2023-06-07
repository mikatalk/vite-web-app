import { Cell } from "./Cell";

export class Grid {
  cells = Array.from({ length: 100 }).map((_, index) => new Cell(index % 10, Math.floor(index / 10)));

  getCellValueAtIndex(index) {
    return this.cells[index].value;
  }
  
  setCellValueAtIndex(index, cell) {
    this.cells[index].value = cell;
  }

  getCellValueAtPoint(x, y) {
    return this.getCellValueAtIndex(this.pointToIndex(x, y));
  }

  setCellValueAtPoint(x, y, value) {
    this.setCellValueAtIndex(this.pointToIndex(x, y), value);
  }

  pointToIndex(x, y) {
    return x + 10 * y;
  }
}
