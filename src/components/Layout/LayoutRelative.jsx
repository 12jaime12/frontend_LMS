import React from 'react'
import styled from "@emotion/styled";

const PositionRelStyled = styled.div`
background-color: ${({ color }) => color};
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem;
margin-top: ${({margin})=> margin};
z-index:${({zindex})=> zindex};
position: relative;
left: ${({ left }) => left};
right: ${({ right }) => right}
bottom: ${({ bottom }) => bottom}
top: ${({ top }) => top};
`;
export const LayoutRelative = ({children, color, margin, zindex, left, right, bottom, top}) => {
  return (
    <PositionRelStyled color={color} margin={margin} z-index={zindex} left={left} right={right} bottom={bottom} top={top}>
        {children}
    </PositionRelStyled>

  )
}