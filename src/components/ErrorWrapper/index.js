import React from 'react';
import styled from 'styled-components';
import { devices } from '../../devices';

const ErrorWrapper = ({ children }) => {
  return <StyledErrorWrapper>{children}</StyledErrorWrapper>;
};

const StyledErrorWrapper = styled.section`
  max-width: 60rem;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: center;

  // mobile
  @media ${devices.break1}, ${devices.break2} {
    padding: 3rem 4rem;
  }

  svg {
    max-width: 25rem;
    margin-bottom: -5rem;

    // mobile
    @media ${devices.break1} {
      max-width: 20rem;
    }
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    margin-bottom: 4.5rem;
  }

  a,
  button {
    margin: 0 auto;
  }
`;

export default ErrorWrapper;
