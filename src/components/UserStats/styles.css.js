import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../devices';

export const StatsWrapper = styled.div`
  padding: 0 4rem 2.5rem 4rem;
  border-bottom: 1px solid var(--color-blue-2);
  margin-bottom: 2.5rem;

  .arrow {
    transform: ${({ $fullStats }) =>
      $fullStats ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

export const StatsSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding-right: 4rem;
  margin: 0 0 3.5rem 4rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FlexWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 45rem;

  // desktop
  @media ${devices.break4}, ${devices.break5} {
    margin-bottom: 2rem;
  }
  // tablet
  @media ${devices.break3} {
    margin-bottom: 3rem;
  }
`;
