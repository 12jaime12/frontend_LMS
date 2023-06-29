import React from 'react';
import styled from '@emotion/styled';

const FlexStyled = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  border-radius: 5px;
  gap: ${({ gap }) => gap};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};

  @media only screen and (max-width: 1450px) {
    flex-direction: ${({ flexMedia }) => flexMedia};
    place-items: ${({ placeItems }) => placeItems};
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    place-items: ${({ placeItems }) => placeItems};
  }
`;
export const LayoutFlex = ({
  children,
  direction,
  color,
  padding,
  gap,
  margin,
  placeItems,
  paddingBottom,
}) => {
  return (
    <FlexStyled
      direction={direction}
      gap={gap}
      color={color}
      padding={padding}
      margin={margin}
      placeItems={placeItems}
      paddingBottom={paddingBottom}
    >
      {children}
    </FlexStyled>
  );
};
