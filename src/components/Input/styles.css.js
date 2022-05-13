import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const InputInnerWrapper = styled.div`
  position: relative;

  label,
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--transition);
  }

  label {
    left: 0;
    padding-left: 2.5rem;
    color: var(--color-blue-4-a75);
    cursor: text;
  }

  button {
    right: 0;
    padding-right: 2.5rem;
    line-height: 0;
    font-size: 1.9rem;
    color: var(--color-blue-4);

    &:hover {
      color: var(--color-blue-4-a75);
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem 1.6rem 2.5rem;
  border: 1px solid var(--color-blue-3);
  border-radius: 5rem;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  transition: all var(--transition);
  ${({ hasError }) => hasError && 'box-shadow: var(--color-error) 0 0 0 1.5px;'}

  &:focus {
    box-shadow: var(--color-primary-2) 0 0 0 1.5px;
    outline: none;
    ${({ hasError }) =>
      hasError && 'box-shadow: var(--color-error) 0 0 0 1.5px;'};

    & + label {
      font-size: 1.2rem;
      transform: translateY(0);
      top: 1rem;
    }
  }

  & + label {
    ${({ hasText }) =>
      hasText && 'font-size: 1.2rem; transform: translateY(0); top: 1rem;'}
  }
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1rem;
  margin-top: 0.6rem;
  font-size: 1.4rem;

  svg {
    color: var(--color-error);
  }
`;
