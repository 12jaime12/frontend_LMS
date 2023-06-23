import styled from "@emotion/styled";
import React from "react";

const HeaderForm = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: rgba(0, 0, 0, 0.33);
font-size: 20px;
gap: 4rem;
margin-right: 20px;
width:  100vw;
heigth: 13vh;

`;
export const LayoutHeader = ({children}) => {
  return (
    <HeaderForm>
        {children}
    </HeaderForm>
  )
}