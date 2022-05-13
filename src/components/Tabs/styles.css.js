import styled from 'styled-components';

export const TabsWrapper = styled.div`
  padding: 0 4rem;
`;

export const TabsButtonWrapper = styled.div`
  width: max-content;
  padding: 0.8rem;
  border-radius: 5rem;
  background-color: var(--color-blue-1);
`;

export const TabsButton = styled.button`
  padding: ${({ isActive }) => (isActive ? '1rem 1.5rem' : '1rem')};
  border: ${({ isActive }) =>
    isActive ? '1px solid var(--color-blue-2)' : '1px solid transparent'};
  border-radius: 5rem;
  background-color: ${({ isActive }) => isActive && '#fff'};
  font-size: 1.5rem;
  transition: all var(--transition);
`;
