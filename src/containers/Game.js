import React, { Component } from 'react';
import { connect } from 'react-redux';
import { executeTurn, undoTurn, gameOver } from '../actionCreators';
import Board from '../components/Board';

class Game extends Component {
  componentDidUpdate() {
    if (checkForWinner(this.props.currentBoard)) {
      this.props.gameIsOver();
    }
  }

  render() {
    return (
      <Board
        currentBoard={this.props.currentBoard}
        moveOnClick={this.props.chooseSquare}
        isGameOver={this.props.isGameOver}
        history={this.props.history}
        undoTurn={this.props.undoTurn}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentBoard:
      state.updateBoard.history[state.updateBoard.history.length - 1],
    history: state.updateBoard.history,
    isGameOver: state.endGame
  };
};

const mapDispatchToProps = dispatch => ({
  chooseSquare(row, col) {
    dispatch(executeTurn(row, col));
  },
  undoTurn() {
    dispatch(undoTurn());
  },
  gameIsOver() {
    dispatch(gameOver());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

function checkForWinner(board) {
  let boardFlattened = board[0].concat(board[1], board[2]);
  console.log(boardFlattened);
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombo.length; i++) {
    const [a, b, c] = winningCombo[i];
    if (
      boardFlattened[a] &&
      boardFlattened[a] === boardFlattened[b] &&
      boardFlattened[a] === boardFlattened[c]
    ) {
      return boardFlattened[a];
    }
  }
  return false;
}
