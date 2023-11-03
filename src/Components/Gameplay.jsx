import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const[showRules,setShowRules]=useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selectedNumber) {
      setError("you have not selected a number ");
      return;
    }
   

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore=()=>{
    setScore(0);
  }
  const toggleRules= ()=>{
    setShowRules(!showRules)
  }
  
  return (
    <MainContainer>
      <div className="top_Section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}> Reset Score</OutlineButton>
        <Button onClick={toggleRules}> Show Rules</Button>
      </div>
     { showRules && <Rules/>}


    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_Section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    gap:10px;
    margin-top:30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:10px;
    align-items:center;
  }
`;
