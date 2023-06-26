import styled from "@emotion/styled";
import React from "react";

const FooterForm = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 20vh;
@media only screen and ( max-width: 1050px){
		flex-direction: column;
}

`;
export const LayoutFooter = ({children}) => {
  return (
    <FooterForm>
        {children}
    </FooterForm>
  )
}