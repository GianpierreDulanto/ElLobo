import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import TournamentListV2 from "./components/TournamentListV2";

function App() {
  const [showTournament, setShowTournament] = useState(false);

  return (
    <>
      {!showTournament ? (
        <HomePage onPlayClick={() => setShowTournament(true)} />
      ) : (
        <TournamentListV2 />
      )}
    </>
  );
}

export default App;
