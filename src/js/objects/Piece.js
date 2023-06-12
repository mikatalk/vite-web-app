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
  thumbnail = null;

  constructor (type = Piece.getRandomType()) {
    this.type = type;
    this.polyline = JSON.parse(JSON.stringify(type === Piece.PIECE_NONE.type ? Piece.PIECE_NONE : Piece.PIECES.find((a) => a.type === type)));
    this.thumbnail = this.makeThumbnail();
  }

  static getRandomType(){
    return Piece.PIECES[Math.floor(Piece.PIECES.length * Math.random())].type;
  }

  shuffle () {
    this.type = Piece.getRandomType();
    this.polyline = JSON.parse(JSON.stringify(this.type === Piece.PIECE_NONE.type ? Piece.PIECE_NONE : Piece.PIECES.find(({type}) => type === this.type)));
    this.thumbnail = this.makeThumbnail();
  }

  disable () {
    this.polyline = Piece.PIECE_NONE;
    this.type = Piece.PIECE_NONE.type
    this.thumbnail = this.makeThumbnail();
  }

  makeThumbnail () {
    const image = new Image();
    image.width = Piece.canvas.width = 100;
    image.height = Piece.canvas.height = 100;
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
    image.src = Piece.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    return image;
  }
}