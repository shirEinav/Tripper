import styled from 'styled-components';

export const StyledRadio = styled.input`
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;

  & + label {
    position: relative;
    display: flex;
    gap: 0.6rem;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 1.4rem;
    border: 1px solid var(--color-blue-3);
    border-radius: 5rem;
    color: var(--color-blue-4-a75);
    transition: all var(--transition);
    cursor: pointer;
  }

  &:hover + label {
    background-color: var(--color-blue-1-a50);
  }

  &:checked + label {
    border-color: transparent;
    box-shadow: var(--color-primary-3) 0 0 0 1.3px;
    color: var(--color-primary-3);
  }
`;
