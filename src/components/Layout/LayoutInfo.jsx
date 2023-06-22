import React from 'react'
import styled from "@emotion/styled";

const InfoStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: absolute;
`;
export const LayoutAbsolute = ({children}) => {
  return (
    <PositionAbsStyled>
        {children}
    </PositionAbsStyled>

  )
}