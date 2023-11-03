import React, { useEffect, useState } from "react";
import StartGame from "./Components/StartGame";
import Gameplay from "./Components/Gameplay";
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
};

export default App;
