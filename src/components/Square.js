import React from 'react';
import './Square.css';

const Square = props => {
  const executeTurnOnClick = () => {
    if (!props.board[props.rowNumber][props.squareNumber]) {
      return props.moveOnClick(props.rowNumber, props.squareNumber);
    }
  };
  return (
    <td>
      <div onClick={executeTurnOnClick} className="square">
        <p>
          {props.board[props.rowNumber][props.squareNumber]}
        </p>
      </div>
    </td>
  );
};

export default Square;
