import styled from '@emotion/styled';
import React from 'react';

const ImgCustom = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  heigth: ${({ heigth }) => heigth};
  border-radius: 5px;
`;

export const ImgC = ({ children, width, heigth }) => {
  return (
    <ImgCustom width={width} heigth={heigth}>
      {children}
    </ImgCustom>
  );
};
