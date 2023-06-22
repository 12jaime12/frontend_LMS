import styled from "@emotion/styled";
import React from "react";

const PCustom = styled.p`
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
      font-size: ${({ size }) =>
    size === "xl"
      ? "2.81rem"
      : size === "lg"
      ? "2.11rem"
      : size === "md"
      ? "1.58rem"
      : size === "small"
      ? "0.8rem"
      : "1rem"};
      
`;

export const PC = ({ text, width, color, size}) => {
  return <PCustom widthVariant={width} color={color} size={size}>{text}</PCustom>;
};