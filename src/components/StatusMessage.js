import React from "react";

export const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every((element) => element !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next player is{" "}
          <span className={current.isXNext ? "text-green" : "text-orange"}>
            {current.isXNext ? "X" : "0"}{" "}
          </span>
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span className="text-green">X</span>{" "}and{" "}
          <span className="text-orange">0</span>{" "}tied
        </>
      )}
    </div>
  );
};
