import styled from "@emotion/styled";
import React from "react";

React

const H1Custom = styled.h1`
  width: ${({ widthVariant }) =>
    widthVariant == "extralargo"
      ? "400px"
      : "largo"
      ? "200px"
      : "medio"
      ? "100px"
      : "pequeño" && "50px"};
`;

export const H1C = ({ text, width }) => {
  return <H1Custom widthVariant={width}>{text}</H1Custom>;
};
