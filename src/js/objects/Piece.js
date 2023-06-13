import { Assets } from "../utils/Assets";

export class Piece {
  static PIECE_NONE = { 
    type: "none",
    points: []
  };

  static PIECES = [

    // XXX
    //   X
    //   X
    { 
      type: "BigL",
      rotationAble: true, 
      points: [[0,0], [1,0], [2,0], [2,1], [2,2]]
    },

    // XX
    //  X
    { 
      type: "SmallL",
      rotationAble: true, 
      points: [[0,0], [1,0], [1,1]]
    },

    // X
    { 
      type: "Dot",
      rotationAble: false, 
      points: [[0,0]]
    },

    // XX
    // XX
    { 
      type: "SmallSquare",
      rotationAble: false, 
      points: [[0,0], [1,0], [0,1], [1,1]]
    },

    // XXX
    // XXX
    // XXX
    { 
      type: "BigSquare",
      rotationAble: false, 
      points: [[0,0], [1,0], [2,0], [0,1], [1,1], [2,1], [0,2], [1,2], [2,2]]
    },

    // XX
    { 
      type: "Line2",
      rotationAble: true, 
      points: [[0,0], [1,0]]
    },
    // XXX
    { 
      type: "Line3",
      rotationAble: true, 
      points: [[0,0], [1,0], [2,0]]
    },
    // XXXX
    { 
      type: "Line4",
      rotationAble: true, 
      points: [[0,0], [1,0], [2,0], [3,0]]
    },
    // XXXXX
    { 
      type: "Line5",
      rotationAble: true, 
      points: [[0,0], [1,0], [2,0], [3,0], [4,0]]
    },
    
  ];
  
  static canvas = document.createElement('canvas');
  static context = Piece.canvas.getContext('2d');

  imageString = '';

  constructor (type = Piece.getRandomType()) {
    this.type = type;
    this.polyline = JSON.parse(JSON.stringify(type === Piece.PIECE_NONE.type ? Piece.PIECE_NONE : Piece.PIECES.find((a) => a.type === type)));
    this.makeThumbnail();
  }

  static getRandomType(){
    return Piece.PIECES[Math.floor(Piece.PIECES.length * Math.random())].type;
  }

  rotatePiece () {

    const width = (1 + Math.max(...this.polyline.points.map(([x]) => x))) - Math.min(...this.polyline.points.map(([x]) => x));
    const height = (1 + Math.max(...this.polyline.points.map(([,y]) => y))) - Math.min(...this.polyline.points.map(([,y]) => y));
    const size = Math.max(width, height);
    const {points} = this.polyline;
    // convert data to 2d matrix:
    let array2d = [];
    for (let y = 0; y < size; y += 1) {
      array2d.push([])
      for(let x = 0; x < size; x += 1) {
        const match = points.find(([pX, pY]) => x === pX && y === pY)
        array2d[y].push(match ? 1 : 0);
      }
    }
    // rotate matrix:
    // console.log('Piece rotation 1:', array2d);
    array2d = array2d.map((val, index) => array2d.map(row => row[index]).reverse());
    // console.log('Piece rotation 2:', array2d);
    
    // convert back to points array
    // while removing padding from left and top sides to align rotation
    this.polyline.points = [];
    for (let y = 0; y < size; y += 1) {
      for(let x = 0; x < size; x += 1) {
        if (array2d[y][x] === 1) {
          this.polyline.points.push([x - Math.max(0, width-height), y - Math.max(0, height-width)]);
        }
      }
    }
    this.makeThumbnail();  
  }

  copyPiece (piece) {
    this.type = piece.type;
    this.polyline = JSON.parse(JSON.stringify(this.type === Piece.PIECE_NONE.type ? Piece.PIECE_NONE : Piece.PIECES.find(({type}) => type === this.type)));
    this.makeThumbnail();
  }

  shuffle () {
    this.type = Piece.getRandomType();
    this.polyline = JSON.parse(JSON.stringify(this.type === Piece.PIECE_NONE.type ? Piece.PIECE_NONE : Piece.PIECES.find(({type}) => type === this.type)));
    this.makeThumbnail();
  }

  disable () {
    this.polyline = Piece.PIECE_NONE;
    this.type = Piece.PIECE_NONE.type
    this.makeThumbnail();
  }

  makeThumbnail () {
    Piece.canvas.width = 100;
    Piece.canvas.height = 100;
    const ctx = Piece.context;
    ctx.clearRect(0,0,100,100);
    const tile = Assets.getImage('tile');
    const width = (1 + Math.max(...this.polyline.points.map(([x]) => x))) - Math.min(...this.polyline.points.map(([x]) => x));
    const height = (1 + Math.max(...this.polyline.points.map(([,y]) => y))) - Math.min(...this.polyline.points.map(([,y]) => y));
    if (tile) {
      for (let [x, y] of this.polyline.points) {
        ctx.drawImage(tile,
          50 - width * 10 + x * 20,
          50 - height * 10 + y * 20,
          18, 18);
      }
    }
    this.imageString = Piece.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  }
}