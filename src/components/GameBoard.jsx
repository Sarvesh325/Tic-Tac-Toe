import React, { useState } from "react";
const initailGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function GameBoard({ onSelectSquare, turns }) {
  // const [gameBoard, setGameBoard] = useState(initailGameBoard);
  // const handleSelectPlayer = (rowIndex, colIndex) => {
  //   setGameBoard((prevBoard) => {
  //     const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // };

  let gameBoard = initailGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol != null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

export default GameBoard;
