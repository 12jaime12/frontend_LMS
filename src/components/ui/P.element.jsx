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
`;

export const PC = ({ text, width }) => {
  return <PCustom widthVariant={width}>{text}</PCustom>;
};