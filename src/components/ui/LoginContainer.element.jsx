import styled from "@emotion/styled";
import React from "react";


const ContainerStyled = styled.div`

display: flex;
flex-direction: ${({ direction }) => direction};
justify-content: center;
align-items: center;
background: #961a1a;
padding: 15px 25px 30px;
border-radius: 5px;
gap: ${({ gap }) => gap};
`;

export const LoginContainer = ({children, direction, gap})=>{
    return(
        <ContainerStyled direction = { direction} gap = { gap}>
            {children}
        </ContainerStyled>

    )
}

