import styled from "@emotion/styled";
import React from "react";

const HeaderForm = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size: 20px;
height: 10vh;
`;
export const LayoutHeader = ({children}) => {
  return (
    <HeaderForm>
        {children}
    </HeaderForm>
  )
}