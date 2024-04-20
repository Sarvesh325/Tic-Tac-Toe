import Player from "./components/Player";

function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player intitalName={"Player1"} symbol={"X"} />
          <Player intitalName={"Player2"} symbol={"O"} />
        </ol>
        GAMEBOARD
      </div>
      LOG
    </>
  );
}

export default App;
