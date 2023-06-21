import React from 'react'
import styled from "@emotion/styled";

const PositionStyled = styled.div`
display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
margin-top: 30vh;
z-index: 400;
position:abosolute;`
;
export const LayoutPosition = ({children, direction}) => {
  return (
    <div style={{position: "relative"}}>
      <PositionStyled direction = {direction}>
        {children}
    </PositionStyled>

    </div>

  )
}