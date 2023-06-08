import { Assets } from "../utils/Assets";

export class Piece {
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
  thumbnail = null;

  constructor (type = null, dropOffTarget, callBack) {
    if (type) {
      this.points = Piece.PIECES.find((a) => a.type === type);
    }
    this.points = this.getRandomPiece();
    this.thumbnail = Piece.makeThumbnail(this);
  }

  getRandomPiece(){
    return JSON.parse(JSON.stringify(Piece.PIECES[Math.floor(Piece.PIECES.length * Math.random())]));
  }

  static makeThumbnail (piece) {
    const image = new Image();
    image.width = Piece.canvas.width = 100;
    image.height = Piece.canvas.height = 100;
    const ctx = Piece.context;
    const tile = Assets.getImage('tile-hover')
    ctx.clearRect(0,0,100,100);
    ctx.drawImage(tile, 0, 40, 20, 20);
    ctx.drawImage(tile, 20, 40, 20, 20);
    ctx.drawImage(tile, 40, 40, 20, 20);
    ctx.drawImage(tile, 60, 40, 20, 20);
    ctx.drawImage(tile, 80, 40, 20, 20);
    // ctx.fillStyle = 'red'
    // ctx.fillRect(0,0,10,10);
    // ctx.fillStyle = 'green'
    // ctx.fillRect(90,90,10,10);
    image.src = Piece.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    return image;
  }
}