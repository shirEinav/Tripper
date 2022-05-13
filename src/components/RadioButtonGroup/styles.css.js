import styled from 'styled-components';
import { devices } from '../../devices';

export const RadioButtonsWrapper = styled.div`
  h3 {
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  div {
    display: flex;
    align-items: stretch;
    gap: 1rem;

    // small mobile
    @media ${devices.break1} {
      flex-direction: column;
    }
  }
`;
