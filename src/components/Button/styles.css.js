import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  width: ${({ $width }) => $width || 'max-content'};
  min-height: ${({ $minHeight }) => $minHeight};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  font-size: ${({ $fontSize }) => $fontSize || '1.5rem'};
  border-radius: 5rem;
  text-align: center;
  white-space: nowrap;
  transition: all var(--transition);
  cursor: pointer;

  &.btn-with-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ $gap }) => $gap || '0.2rem'};
    line-height: 1;
  }

  &.btn-primary {
    background-color: var(--color-primary-3);
    color: #fff;
    &:hover {
      background-color: var(--color-primary-2);
    }
  }

  &.btn-secondary {
    border: 1px solid var(--color-blue-3);
    &:hover {
      background-color: var(--color-blue-1-a50);
    }
  }

  &.btn-dark {
    background-color: var(--color-blue-5);
    color: #fff;
    @media (hover: hover) {
      &:hover {
        background-color: 'var(--color-primary-3)';
      }
    }
  }

  &.btn-text {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-primary-3);
    &:hover {
      color: var(--color-blue-5);
    }
  }

  &.btn-disabled {
    color: var(--color-blue-4-a75);
    background-color: var(--color-blue-3);
    cursor: not-allowed;
  }

  &.btn-form {
    width: 100%;
    padding: 2rem;
    min-height: 5.64rem;
  }

  &.btn-warning {
    width: 100%;
    min-height: 5.5rem;
    padding: 1.9rem;
    margin: 1.2rem auto 0;
    background-color: hsl(351, 65%, 57%, 12%);
    color: var(--color-error);

    &:hover {
      background-color: hsl(351, 65%, 57%, 8%);
    }
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
