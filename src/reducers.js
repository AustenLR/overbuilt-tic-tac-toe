import { EXECUTE_TURN, UNDO_TURN, GAME_OVER } from './actions';
import { combineReducers } from 'redux';

const initialState = {
  history: [[Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]]
};

const updateBoard = (state = initialState, action) => {
  if (action.type === EXECUTE_TURN) {
    let history = state.history;
    let player = history.length % 2 === 1 ? 'X' : 'O';
    let board = history[history.length - 1].reduce(function(s, el) {
      let innerArrayCopy = el.slice();
      s.push(innerArrayCopy);
      return s;
    }, []);
    board[action.row][action.col] = player;
    return Object.assign({}, state, {
      history: [...state.history, board]
    });
  } else if (action.type === UNDO_TURN) {
    let updatedHistory = state.history.reduce(function(
      s,
      outerArray,
      index,
      fullHistory
    ) {
      if (index === fullHistory.length - 1) return s;

      let arrayOfArraysCopy = outerArray.reduce(function(start, innerArray) {
        start.push(innerArray.slice());
        return start;
      }, []);
      s.push(arrayOfArraysCopy);
      return s;
    }, []);
    return Object.assign({}, state, {
      history: updatedHistory
    });
  }
  return state;
};

const endGame = (state = false, action) => {
  if (action.type === GAME_OVER) {
    return true;
  }
  return state;
};

const rootReducer = combineReducers({
  updateBoard,
  endGame
});

export default rootReducer;
