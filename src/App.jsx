import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  };
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intitalName={"Player1"} symbol={"X"} isActive={activePlayer==="X"} />
          <Player intitalName={"Player2"} symbol={"O"}  isActive={activePlayer==="O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </>
  );
}

export default App;
