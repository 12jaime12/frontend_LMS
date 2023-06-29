import React from 'react';
import styled from '@emotion/styled';

const InfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ content }) => content};
  align-items: center;
  position: ${({ position }) => position};
  background: ${({ color }) => color};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  ${
    '' /* @media only screen and ( max-width: 1050px){
		width: 255px;
    padding: 1rem;
} */
  }
`;
export const LayoutInfo = ({
  children,
  content,
  position,
  color,
  gap,
  padding,
  height,
}) => {
  return (
    <InfoStyled
      content={content}
      position={position}
      color={color}
      gap={gap}
      paddin={padding}
      height={height}
    >
      {children}
    </InfoStyled>
  );
};
