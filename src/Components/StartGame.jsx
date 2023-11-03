import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const startGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div>
        <h1 className="content">Dice Game</h1>
        <Button onClick={toggle}>
          Play Now</Button>
      </div>
    </Container>
  );
};

export default startGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    
      font-size: 96px;
      white-space: nowrap;
    
  }
`;


