import React from 'react'
import styled from "@emotion/styled";

const FlexStyled = styled.div`
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
background: #fff;
padding: 15px;
border-radius: 5px;
gap: ${({ gap }) => gap};
`;
export const LayoutFlex = ({children, direction, gap}) => {
  return (
    <FlexStyled direction = { direction} gap = { gap}>
        {children}
    </FlexStyled>
  )
}
