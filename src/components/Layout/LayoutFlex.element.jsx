import React from 'react'
import styled from "@emotion/styled";

const FlexStyled = styled.div`
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
background: ${({ color }) => color};;
padding: ${({ padding }) => padding};
border-radius: 5px;
gap: ${({ gap }) => gap};

`
;
export const LayoutFlex = ({children, direction, color, padding, gap, margin}) => {
  return (
    <FlexStyled direction = { direction} gap={ gap} color={color} padding = { padding} margin={margin}>
        {children}
    </FlexStyled>
  )
}
