import React from 'react'
import styled from "@emotion/styled";

const InfoStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: ${({ content }) => content};
align-items: center;
position: ${({ position }) => position};
background: ${({ color }) => color};
`;
export const LayoutInfo = ({children, content, position, color}) => {
  return (
    <InfoStyled content={content} position={position} color={color} >
        {children}
    </InfoStyled>

  )
}