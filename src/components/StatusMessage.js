import React from "react";

export const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every((element) => element !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next player is ${current.isXNext ? "X" : "O"}`}
      {!winner && noMoveLeft && "X and O tied"}
    </h2>
  );
};
