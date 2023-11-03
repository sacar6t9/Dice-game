import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer className='container'>
      <h2> how to play dice </h2>
      <div className="text">
        <p>select any number</p>
        <p> click on dice image</p>
        <p> roll the dice by clicking on it again</p>
        <p>If you get wrong 2 points will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
 max-width:800px;
background-color:#FBF1F1;
padding:20px;
margin: 0 auto; 
border-radius:10px;
h2{
    font-size: 24px;

}
.text{
    margin-top:24px;
}
`
