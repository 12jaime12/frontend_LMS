import React from 'react'
import styled from "@emotion/styled";

const PositionRelStyled = styled.div`
background-color: ${({ color }) => color};
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
z-index:2;
position: relative;
left: 500px;
top: 100px;
`;
export const LayoutRelative = ({children, color}) => {
  return (
    <PositionRelStyled color={color}>
        {children}
    </PositionRelStyled>

  )
}