import { Cell } from "./Cell";

export class Grid {
  cells = Array.from({ length: 100 }).map((_, index) => new Cell(index % 10, Math.floor(index / 10)));

  getCellValueAtIndex(index) {
    return this.cells[index].value;
  }
  
  setCellValueAtIndex(index, cell) {
    if (index < 0 || index > this.cells.length) {
      console.log('ERROR - index out of range:', index)
      return null;
    }
    this.cells[index].value = cell;
  }

  getCellValueAtPoint(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      console.log('ERROR - index out of range:', index)
      return null;
    }
    return this.getCellValueAtIndex(this.pointToIndex(x, y));
  }

  setCellValueAtPoint(x, y, value) {
    this.setCellValueAtIndex(this.pointToIndex(x, y), value);
  }

  pointToIndex(x, y) {
    return x + 10 * y;
  }

  doesItFitAt(mouseX, mouseY, points, activeClass = Cell.SET) {
    // reset previews
    this.cells.forEach(cell => {
      if (cell.value === Cell.PREVIEW) {
        cell.value = Cell.UNSET;
      }
    });

    const width = (1 + Math.max(...points.map(([x]) => x))) - Math.min(...points.map(([x]) => x));
    const height = (1 + Math.max(...points.map(([,y]) => y))) - Math.min(...points.map(([,y]) => y));
    const indexX = Math.floor(mouseX * 10);
    const indexY = Math.floor(mouseY * 10);
    if (indexX < -1 || indexX > 9 || indexY < -1 || indexY > 9) {
      return false;
    }

    const startX = indexX - Math.floor((width )/2);
    const startY = indexY - Math.floor(height / 2 );
    // const startX = indexX - Math.floor(width / 2 - (width % 2) / 4);
    // const startY = indexY - Math.floor(height / 2 - (height % 2) / 4);

    let itFits = true;
    points.forEach(([pX,pY]) => {
      const x = startX + pX;
      const y = startY + pY;
      if (
        x > -1 && 
        x < 10 && 
        y > -1 && 
        y < 10
      ) {
        const value = this.getCellValueAtPoint(x, y);
        if (value === Cell.SET) {
          itFits = false;
        }
      } else {
        itFits = false;
      }
    });

    // reset values
    points.forEach(([pX,pY]) => {
      const x = startX + pX;
      const y = startY + pY;
      if (x > -1 && x < 10 && y > -1 && y < 10) {

        const value = this.getCellValueAtPoint(x, y);
        this.setCellValueAtPoint(
          x,
          y,
          value === Cell.SET ? Cell.SET : itFits ? activeClass : Cell.UNSET
        );
      }
    })
    return itFits;
  }
}
