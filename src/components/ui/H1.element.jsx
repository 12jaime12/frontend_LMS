import styled from "@emotion/styled";
import React from "react";

const H1Custom = styled.h1`
  width: ${({ widthVariant }) =>
    widthVariant == "extralargo"
      ? "400px"
      : "largo"
      ? "200px"
      : "medio"
      ? "100px"
      : "pequeño" && "50px"};
       text-align: ${({ align }) =>
    align === "left"
      ? "left"
      : "center"};
`;

export const H1C = ({ text, width, align }) => {
  return <H1Custom widthVariant={width} align={align}>{text}</H1Custom>;
};
