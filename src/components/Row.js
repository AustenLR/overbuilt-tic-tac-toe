import React from 'react';
import Square from './Square';
import './Row.css';

const Row = props => {
  return (
    <tr>
      {props.board[props.rowNumber].map((squareNumber, index) => {
        return (
          <Square
            key={index}
            squareNumber={index}
            rowNumber={props.rowNumber}
            board={props.board}
            moveOnClick={props.moveOnClick}
            className="row"
          />
        );
      })}
    </tr>
  );
};

export default Row;
