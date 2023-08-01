import styled from '@emotion/styled';
import React from 'react';

const HomeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-heigth: 100vh;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  position: relative;
  z-index: 3;
`;
export const LayoutHome = ({ children, padding, margin }) => {
  return (
    <HomeForm padding={padding} margin={margin}>
      {children}
    </HomeForm>
  );
};
