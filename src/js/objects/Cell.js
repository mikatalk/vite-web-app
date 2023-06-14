export class Cell {
  static UNSET = 'unset';
  static SET = 'set';
  static PREVIEW = 'preview';

  constructor (x, y, value = Cell.UNSET) {
    this.x = x;
    this.y = y;
    this.value = value;
  }
}
