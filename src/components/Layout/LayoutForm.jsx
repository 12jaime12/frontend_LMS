import styled from "@emotion/styled";
import React from "react";

const FlexForm = styled.div`
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
z-index: ${({zindex})=> zindex};
background: ${({ color }) => color};
width:  ${({ width }) => width};
heigth:  ${({ heigth }) => heigth};
padding: ${({ padding }) => padding};
border-radius: 5px;
gap: ${({ gap }) => gap};
padding-top: ${({ paddingTop }) => paddingTop};
margin-top: ${({ margin }) => margin};
@media only screen and ( max-width: 1050px){
		width: 310px;
    padding: 1rem;
}
`;
export const LayoutForm = ({children, direction,zindex, color, width, heigth, padding, gap, paddingTop}) => {
  return (
    <FlexForm direction = { direction} zindex= {zindex} color={color} width={width} heigth={heigth} padding = { padding} gap={ gap} paddingTop={paddingTop}>
        {children}
    </FlexForm>
  )
}
