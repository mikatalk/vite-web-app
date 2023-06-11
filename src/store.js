import { Cell } from "./js/objects/Cell";
import { Grid } from "./js/objects/Grid";
import { Piece } from "./js/objects/Piece";

const state = {
  bankPieces: [],
  backupPiece: null,
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
    addPieceToBank () {
      state.bankPieces.push(new Piece());
      state.changes.bank.value += 1;
    },
    addBackupPiece () {
      state.backupPiece = new Piece();
      state.changes.bank.value += 1;
    },
    hasRendered (target) {
      state.changes[target].previous = state.changes[target].value;
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
    gridChanged: () => state.changes.grid.previous !== state.changes.grid.value,
    bankChanged: () => state.changes.bank.previous !== state.changes.bank.value,
  }
}
