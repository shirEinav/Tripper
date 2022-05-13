import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '../../devices';

export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1100;
  width: 100%;
  height: 100%;
  background-color: var(--color-blue-dark-a75);
`;

export const ModalWrapper = styled(motion.div)`
  width: 100%;
  background-color: #fff;

  // desktop + tablet
  @media ${devices.break3}, ${devices.break4}, ${devices.break5} {
    max-width: 55rem;
    max-height: 80vh;
    border-radius: 2rem;
  }
  // mobile
  @media ${devices.break1}, ${devices.break2} {
    height: 100%;
  }
`;

export const ModalHeader = styled.header`
  position: relative;
  width: 100%;
  padding: 2.5rem 3rem;
  border-bottom: 1px solid var(--color-blue-3);
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  button {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    padding: 1rem;
    border-radius: 50%;
    font-size: 2.2rem;
    line-height: 0;
    transition: all var(--transition);

    &:hover {
      background-color: var(--color-blue-1);
    }
  }
`;

export const ModalInner = styled.div`
  max-height: calc(80vh - 10.1rem);
  overflow-y: auto;
`;

export const ContentWrapper = styled.div`
  display: ${({ $contentCentered }) => ($contentCentered ? 'grid' : 'block')};
  place-items: ${({ $contentCentered }) => ($contentCentered ? 'center' : '')};
  padding: ${({ $padding }) => $padding || '3rem'};
  border-top: ${({ $borderTop }) => $borderTop};
  min-height: ${({ $minHeight }) => $minHeight};
`;
