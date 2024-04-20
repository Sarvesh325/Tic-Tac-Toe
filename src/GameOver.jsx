import React from "react";

function GameOver({ winner, handleRetstart }) {
  return (
    <>
      <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It's a Draw Play Again!</p>}

        <p>
          <button onClick={handleRetstart}>Rematch!</button>
        </p>
      </div>
    </>
  );
}

export default GameOver;
