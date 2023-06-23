import styled from "@emotion/styled";
import React from "react";


const FlexInline = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background: ${({ color }) => color};
padding: ${({ padding }) => padding};
heigth: ${({heigth})=> heigth};
border-radius: 5px;
gap: ${({ gap }) => gap};
margin-top: ${({ margin }) => margin}`

export const LayoutInline = ({children, direction, color, padding, heigth, gap, margin}) => {
  return (
    <FlexInline direction={ direction}  gap={ gap} color= { color} heigth={heigth} padding = { padding} margin={margin}>
        {children}
    </FlexInline>
  )
}