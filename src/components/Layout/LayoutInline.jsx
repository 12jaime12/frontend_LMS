import styled from "@emotion/styled";
import React from "react";


const FlexInline = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background: white;
padding: ${({ padding }) => padding};
border-radius: 5px;
gap: ${({ gap }) => gap};
`;
export const LayoutInline = ({children, padding, gap}) => {
  return (
    <FlexInline gap={ gap} padding = { padding}>
        {children}
    </FlexInline>
  )
}