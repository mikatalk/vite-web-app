import { Assets } from "../utils/Assets";

export class Piece {
  static PIECES = [

    // // empty
    // { 
    //   type: "Empty",
    //   points: []
    // },

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

  constructor (type = Piece.getRandomType()) {
    this.type = type;
  // constructor (type = null, dropOffTarget, callBack) {
    // if (type) {
      this.polyline = Piece.PIECES.find((a) => a.type === type);
    // } else {
    //   this.polyline = this.getRandomPiece();
    // }
    this.thumbnail = this.makeThumbnail();
  }

  static getRandomType(){
    return Piece.PIECES[Math.floor(Piece.PIECES.length * Math.random())].type;
  }
  // getRandomPiece(){
  //   return JSON.parse(JSON.stringify(Piece.PIECES[Math.floor(Piece.PIECES.length * Math.random())]));
  // }

  makeThumbnail () {
    const image = new Image();
    image.width = Piece.canvas.width = 100;
    image.height = Piece.canvas.height = 100;
    const ctx = Piece.context;
    ctx.clearRect(0,0,100,100);
    const tile = Assets.getImage('tile-hover');
    const width = (1 + Math.max(...this.polyline.points.map(([x]) => x))) - Math.min(...this.polyline.points.map(([x]) => x));
    const height = (1 + Math.max(...this.polyline.points.map(([,y]) => y))) - Math.min(...this.polyline.points.map(([,y]) => y));
    if (tile) {
      for (let [x, y] of this.polyline.points) {
        ctx.drawImage(tile,
          50 - width * 10 + x * 20,
          50 - height * 10 + y * 20,
          // 40,
          // 40 - width * 10 + x * 20,
          // 40,
          // 40 - height * 10 + y * 20,
          20, 20);
      }
    }
    image.src = Piece.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    return image;
  }
}