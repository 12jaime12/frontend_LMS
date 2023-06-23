import styled from "@emotion/styled";
import React from "react";

const HeaderForm = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: rgba(0, 0, 0, 0.33);
font-size: 33px;
gap: 4rem;

width:  ${({ width }) => width};
heigth:  ${({ heigth }) => heigth};
position: absolute;
z-index:5;
`;
export const LayoutHeader = ({children, width, heigth}) => {
  return (
    <HeaderForm  width={width} heigth={heigth}>
        {children}
    </HeaderForm>
  )
}