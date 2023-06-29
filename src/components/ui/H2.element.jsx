import styled from '@emotion/styled';
import React from 'react';

const H2Custom = styled.h2`
  width: ${({ width }) =>
    width === 'extralargo'
      ? '400px'
      : width === 'largo2'
      ? '250px'
      : width === 'largo'
      ? '200px'
      : width === 'medio'
      ? '100px'
      : width === 'pequeño' && '50px'};
  text-align: ${({ align }) => (align === 'left' ? 'left' : 'center')};
`;

export const H2C = ({ text, width, align }) => {
  return (
    <H2Custom widthVariant={width} align={align}>
      {text}
    </H2Custom>
  );
};
