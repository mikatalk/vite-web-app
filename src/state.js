export const store = {
  state: {
    nextPieces: [],
    grid: new Grid()
  }
}


class Cell {
  x = null;
  y = null;

}

class Grid {
  
  cells = Array.from({length: 100}).map((_, index) => new Cell(index % 10, Math.floor(index/10)));

  getCellAt(x, y) {
    const index = x + 10 * y;
  }
  
  setCellAt(x, y, cell) {
  
  }
  
  
}
