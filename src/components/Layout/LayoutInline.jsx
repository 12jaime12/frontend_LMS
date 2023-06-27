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
margin-top: ${({ margin }) => margin};

@media only screen and ( max-width: 1450px){
		flex-direction: ${({ flexMedia }) => flexMedia};
    place-items: ${({ placeItems }) => placeItems};

}
@media only screen and ( max-width: 950px){
		flex-direction: column;
    place-items: ${({ placeItems }) => placeItems};
    
}
`

export const LayoutInline = ({children, direction, color, padding, heigth, gap, margin, flexMedia ,placeItems}) => {
  return (
    <FlexInline direction={ direction}  gap={ gap} color= { color} heigth={heigth} padding = { padding} margin={margin} flexMedia={flexMedia} placeItems={placeItems}>
        {children}
    </FlexInline>
  )
}