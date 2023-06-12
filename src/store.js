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
  }
};

export const store = {
  state,
  mutate: {
    resetBank () {
      state.bankPieces.forEach(piece => piece.shuffle())
      state.changes.bank.value += 1;
    },
    // addBackupPiece () {
    //   state.backupPiece = new Piece();
    //   state.changes.bank.value += 1;
    // },
    hasRendered (target) {
      state.changes[target].previous = state.changes[target].value;
    },
    bumpScoreBy (points) {
      state.score += points;
    },
    removeFromBank (piece) {
      // state
      state.changes.bank.value += 1;
      piece.disable();
      // console.log('remove piece:', state.bankPieces.reduce((count, {type}) => count + type === Piece.PIECE_NONE.type ? 1 : 0, 0));
      // console.log('remove piece:', state.bankPieces.filter(({type}) => type === Piece.PIECE_NONE.type))//.reduce((count, {type}) => count + type === Piece.PIECE_NONE.type ? 1 : 0, 0));
      console.log('+++', state.bankPieces.filter(({type}) => type === Piece.PIECE_NONE.type))
      if (state.bankPieces.filter(({type}) => type === Piece.PIECE_NONE.type).length === 3) {
        store.mutate.resetBank();
        state.changes.bank.value += 1;

      }
    }
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
    gridChanged: () => state.changes.grid.previous !== state.changes.grid.value,
    bankChanged: () => state.changes.bank.previous !== state.changes.bank.value,
  }
}
