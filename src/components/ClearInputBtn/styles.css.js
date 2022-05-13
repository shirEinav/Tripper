import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 3.6rem;
  padding-right: 1rem;
`;

export const Button = styled.button`
  padding: 0.5em;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 0;
  visibility: ${({ inputValue }) => (inputValue ? 'visible' : 'hidden')};
  opacity: ${({ inputValue }) => (inputValue ? '1' : '0')};
  transition: all var(--transition);

  &:hover {
    background-color: var(--color-blue-1-a50);
  }
`;
