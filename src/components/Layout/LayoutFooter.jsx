import styled from "@emotion/styled";
import React from "react";

const FooterForm = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 20vh;
`;
export const LayoutFooter = ({children}) => {
  return (
    <FooterForm>
        {children}
    </FooterForm>
  )
}