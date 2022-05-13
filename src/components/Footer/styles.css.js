import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.5rem;
  border-top: 1px solid var(--color-blue-3);
  background-color: var(--color-blue-1-a50);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    width: max-content;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary-3);
    }
  }
`;
