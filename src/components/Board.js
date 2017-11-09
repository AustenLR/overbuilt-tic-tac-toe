import React from 'react';
import Row from './Row';

const Board = props => {
  let player = props.history.length % 2 === 1 ? 'X' : 'O';
  let header = props.isGameOver
    ? `Game Over! ${player} Lost!`
    : `${player}'s Turn`;
  const startNewGame = () => window.location.reload();
  let clickHandler = props.isGameOver ? startNewGame : props.undoTurn;
  let buttonText = props.isGameOver ? 'New Game' : 'Undo Turn';
  return (
    <div>
      <h2>
        {header}
      </h2>
      <table>
        <tbody>
          {props.currentBoard.map((rowNumber, index) => {
            return (
              <Row
                key={index}
                rowNumber={index}
                board={props.currentBoard}
                moveOnClick={props.moveOnClick}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={clickHandler}>
        {' '}{buttonText}
      </button>
    </div>
  );
};

export default Board;
