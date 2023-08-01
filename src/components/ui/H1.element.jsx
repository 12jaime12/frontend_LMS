import styled from '@emotion/styled';
import React from 'react';

const H1Custom = styled.h1`
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

export const H1C = ({ text, width, align }) => {
  return (
    <H1Custom widthVariant={width} align={align}>
      {text}
    </H1Custom>
  );
};
