import styled from "@emotion/styled";
import React from "react";

const FlexForm = styled.div`
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
background: #f2f2f2;
width:  ${({ width }) => width};
padding: ${({ padding }) => padding};
border-radius: 5px;
gap: ${({ gap }) => gap};
`;
export const LayoutForm = ({children, direction, padding, width, heigth, gap}) => {
  return (
    <FlexForm direction = { direction} gap={ gap} width={width} heigth={heigth} padding = { padding}>
        {children}
    </FlexForm>
  )
}
