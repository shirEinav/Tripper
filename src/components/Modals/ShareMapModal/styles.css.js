import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CopyInputWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  border-radius: 5rem;
  margin-bottom: 2rem;
  background-color: #fff;
`;

export const CopyLabel = styled.label`
  display: block;
  padding-left: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const CopyInput = styled.input`
  width: 100%;
  padding: 2rem 1.5rem 2rem 2rem;
  border: 1px solid var(--color-blue-3);
  border-radius: 5rem 0 0 5rem;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
`;

export const CopyButton = styled.button`
  padding: 1.8rem 2rem 1.8rem 1.8rem;
  border-radius: 0 5rem 5rem 0;
  background-color: var(--color-primary-3);
  color: #fff;
  font-size: 1.7rem;
  line-height: 0;
  transition: background-color var(--transition);

  &:hover {
    background-color: var(--color-primary-2);
  }
`;

export const CopySuccessMessage = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem 2rem;
  border-radius: 5rem;
  border: 1px solid var(--color-blue-3);
  background-color: #fff;

  svg {
    color: var(--color-primary-3);
  }
`;
