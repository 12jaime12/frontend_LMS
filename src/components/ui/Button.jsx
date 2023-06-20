import styled from "@emotion/styled";
import React from "react";

const ButtonStyled = styled.button`
  background-color: ${({ variant }) =>
    variant === "contained" ? "#C61C14" : "transparent"};
  width: fit-content;
  color: ${({ color }) => (color ? color : "white")};
  outline: none;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  transition: 0.1s ease-in-out;
  &:focus {
    background-color: red;
  }
`;

const Button = ({ text, action, variant, color }) => {
  return (
    <ButtonStyled onClick={action} variant={variant} color={color}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
