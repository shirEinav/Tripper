import React from 'react';
import styled from 'styled-components';

const Container = ({ children, style }) => {
  return <StyledContainer {...style}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: flex;
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  gap: ${({ $gap }) => $gap};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  padding: ${({ $padding }) => $padding};
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  border-bottom: ${({ $borderBottom }) => $borderBottom};
`;

export default Container;
