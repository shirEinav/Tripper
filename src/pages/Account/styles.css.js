import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../devices';

export const SuccessMessage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border-radius: 0.8rem;
  background-color: var(--color-primary-1-a50);
  color: var(--color-primary-3);
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
  gap: 1.5rem;

  // mobile
  @media ${devices.break1}, ${devices.break2} {
    flex-direction: column;
  }
`;
