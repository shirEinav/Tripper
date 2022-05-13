import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressTitle = styled.h2`
  order: 3;
  font-size: 1.4rem;
`;

export const ValueLabel = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;

  span {
    font-size: 1.8rem;
  }
`;
