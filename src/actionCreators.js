import { EXECUTE_TURN, UNDO_TURN, GAME_OVER } from './actions';

export function executeTurn(row, col) {
  return {
    type: EXECUTE_TURN,
    row: row,
    col: col
  };
}

export function undoTurn(historyArr) {
  return {
    type: UNDO_TURN
  };
}

export function gameOver() {
  return {
    type: GAME_OVER
  };
}


