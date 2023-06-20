import styled from "@emotion/styled";
import React from "react";


const FlexInline = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background: ${({ color }) => color};
padding: ${({ padding }) => padding};
border-radius: 5px;
gap: ${({ gap }) => gap};`

export const LayoutInline = ({children, direction, color, padding, gap}) => {
  return (
    <FlexInline direction={ direction}  gap={ gap} color= { color} padding = { padding}>
        {children}
    </FlexInline>
  )
}