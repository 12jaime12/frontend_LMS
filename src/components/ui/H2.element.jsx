import styled from "@emotion/styled";
import React from "react";

const H2Custom = styled.h2`
 
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

export const H2C = ({ text, width, align }) => {
  return <H2Custom widthVariant={width} align={align}>{text}</H2Custom>;
};
