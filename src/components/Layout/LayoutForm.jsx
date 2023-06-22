import styled from "@emotion/styled";
import React from "react";

const FlexForm = styled.div`
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
background: ${({ color }) => color};
width:  ${({ width }) => width};
heigth:  ${({ heigth }) => heigth};
padding: ${({ padding }) => padding};
border-radius: 5px;
gap: ${({ gap }) => gap};
`;
export const LayoutForm = ({children, direction, color, width, heigth, padding, gap}) => {
  return (
    <FlexForm direction = { direction} color={color} width={width} heigth={heigth} padding = { padding} gap={ gap}>
        {children}
    </FlexForm>
  )
}
