import React from 'react'
import styled from "@emotion/styled";

const PositionAbsStyled = styled.div`
background-color: ${({ color }) => color};
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
z-index:2;
position: absolute;
`;
export const LayoutAbsolute = ({children, color}) => {
  return (
    <PositionAbsStyled color={color}>
        {children}
    </PositionAbsStyled>

  )
}