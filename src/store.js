import { Cell } from "./js/objects/Cell";
import { Grid } from "./js/objects/Grid";
import { Piece } from "./js/objects/Piece";

const state = {
  score: 0,
  bankPieces: [
    new Piece(Piece.PIECE_NONE.type),
    new Piece(Piece.PIECE_NONE.type),
    new Piece(Piece.PIECE_NONE.type)
  ],
  backupPiece: new Piece(Piece.PIECE_NONE.type),
  grid: new Grid(),
  changes: {
    grid: {
      previous: 0,
      value: 1,
    },
    bank: {
      previous: 0,
      value: 1,
    }
  },
  history: [

  ]
};

export const store = {
  state,
  mutate: {
    undo () {
      const {
        score = state.score,
        bankPieces,
        backupPiece,
        grid
      } = state.history.pop() || {};
      if(bankPieces && backupPiece && grid) {
        store.mutate.restart();
        state.score = score;
        state.bankPieces.forEach((piece, index) => piece.setState(bankPieces[index]));
        state.backupPiece.setState(backupPiece);
        state.grid.setState(grid);
        state.changes.grid.value += 1;
        state.changes.bank.value += 1;
      }
    },
    saveHistory () {
      const {
        score,
        bankPieces,
        backupPiece,
        grid
      } = state;
      state.history.push({
        score,
        bankPieces: bankPieces.map(piece => piece.getState()),
        backupPiece: backupPiece.getState(),
        grid: grid.previousCells.map(({x, y, value}) => ({
            x, y, value: value === Cell.SET ? Cell.SET : Cell.UNSET
          })),
      });
    },
    resetBank () {
      state.bankPieces.forEach(piece => piece.shuffle());
      state.changes.bank.value += 1;
    },
    restart () {
      state.grid.reset();
      state.score = 0;
      store.mutate.resetBank();
      state.backupPiece.disable();
      state.changes.grid.value += 1;
    },
    hasRendered (target) {
      state.changes[target].previous = state.changes[target].value;
    },
    bumpScoreBy (points) {
      state.score += points;
    },
    setBackupPiece (piece) {
      state.changes.bank.value += 1;
      state.backupPiece.copyPiece(piece);
    },
    removeFromBank (piece) {
      state.changes.bank.value += 1;
      piece.disable();
      if (state.bankPieces.filter(({type}) => type === Piece.PIECE_NONE.type).length === 3) {
        store.mutate.resetBank();
      }
    },
    checkWins () {
      // find full lines (two passes for 2d overlaps)
      const rows = []
      const cols = []
      for (let y = 0; y < 10; y += 1) {
        let row = 0;
        let col = 0;
        for (let x = 0; x < 10; x += 1) {
          if (state.grid.getCellValueAtPoint(x, y) === Cell.SET) {
            row += 1;
          }
          if (state.grid.getCellValueAtPoint(y, x) === Cell.SET) {
            col += 1;
          }
        }
        rows.push(row);
        cols.push(col);
      }
      // unset complete lines
      for (let y = 0; y < 10; y += 1) {
        if (rows[y] == 10) {
          // full row
          for (let x = 0; x < 10; x += 1) {
            state.grid.setCellValueAtPoint(x, y, Cell.UNSET);
          }
        }
        if (cols[y] == 10) {
          // full col
          for (let x = 0; x < 10; x += 1) {
            state.grid.setCellValueAtPoint(y, x, Cell.UNSET);
          }
        }
      }
    },
  },
  getters: {
    getPieceById: pieceId => {
      switch (pieceId) {
        case 'bank-piece-1':
          return state.bankPieces[0];
        case 'bank-piece-2':
          return state.bankPieces[1];
        case 'bank-piece-3':
          return state.bankPieces[2];
        case 'backup-piece':
          return state.backupPiece;
      }
    },
    canAcceptBackup: () => state.backupPiece.type === Piece.PIECE_NONE.type,
    gridChanged: () => state.changes.grid.previous !== state.changes.grid.value,
    bankChanged: () => state.changes.bank.previous !== state.changes.bank.value,
  }
}
