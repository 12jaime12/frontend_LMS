import styled from '@emotion/styled';
import React from 'react';

const PCustom = styled.p`
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

  text-align: ${({ align }) =>
    align === 'left' ? 'left' : align === 'right' ? 'right' : 'center'};

  color: ${({ color }) => color};
  font-size: ${({ size }) =>
    size === 'xl'
      ? '2.81rem'
      : size === 'lg'
      ? '2.11rem'
      : size === 'md'
      ? '1.58rem'
      : size === 'small'
      ? '0.8rem'
      : '1rem'};
`;

export const PC = ({ text, width, align, color, size }) => {
  return (
    <PCustom widthVariant={width} align={align} color={color} size={size}>
      {text}
    </PCustom>
  );
};
