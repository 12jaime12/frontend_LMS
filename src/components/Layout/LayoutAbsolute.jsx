import React from 'react'
import styled from "@emotion/styled";

const PositionAbsStyled = styled.div`
background-color: #f2f2f2;
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
z-index:2;
position: relative;
left: 500px;
top: 100px;
z-index: 400;
position:abosolute;
`;
export const LayoutAbsolute = ({children, margin}) => {
  return (
    <PositionAbsStyled ma = {margin}>
        {children}
    </PositionAbsStyled>


    
  )
}