import React from 'react'
import styled from "@emotion/styled";

const PositionAbsStyled = styled.div`
background-color: ${({ color }) => color};
width: 40vw;
display: flex;
flex-direction: ${({direction}) => direction};
align-items: center;
z-index:${({zindex})=> zindex};
position: absolute;

top: ${({top})=>top};
bottom:${({bottom})=>bottom};
right: ${({right})=>right};
left: ${({left})=> left}
`;
export const LayoutAbsolute = ({children, color, direction, zindex, top, bottom, right, left}) => {
  return (
    <PositionAbsStyled color={color} direction={direction} z-index={zindex} top={top} bottom={bottom} right={right} left={left}>
        {children}
    </PositionAbsStyled>

  )
}