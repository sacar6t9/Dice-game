import styled from "styled-components";
const RoleDice = ({ rollDice, currentDice }) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dices/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
