import styled from "@emotion/styled";
import React from "react";

const H3Custom = styled.h3`
 
  width: ${({ widthVariant }) =>
    widthVariant == "extralargo"
      ? "400px"
      : "largo"
      ? "200px"
      : "medio"
      ? "100px"
      : "pequeño" && "50px"};
      color: ${({ color }) => color};
      text-align: ${({ align }) =>
    align === "left"
      ? "left"
      : "center"};
`;

export const H3C = ({ text, width, color, align }) => {
  return <H3Custom widthVariant={width} color={color} align={align}>{text}</H3Custom>;
};
