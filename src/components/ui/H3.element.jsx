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
      text-align: center;
      color: ${({ color }) => color};
`;

export const H3C = ({ text, width, color }) => {
  return <H3Custom widthVariant={width} color={color}>{text}</H3Custom>;
};
