import styled from 'styled-components';

export const SearchCountryWrapper = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  border-radius: 5rem;
  border: 1px solid var(--color-blue-3);
  background-color: #fff;
  overflow: hidden;
  transition: all var(--transition);
  cursor: text;

  &:focus-within {
    z-index: 20;
    border-color: transparent;
    border-radius: 2rem;
    box-shadow: var(--color-primary-3) 0 0 0 1.5px;

    .dropdown-icon svg {
      transform: rotate(180deg);
    }
  }
`;

export const Input = styled.input`
  width: calc(100% - 3.6rem);
  height: 100%;
  padding: 1.9rem 1rem 1.9rem 2.5rem;
  border: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  &::placeholder {
    color: var(--color-blue-4-a75);
  }

  &:focus {
    outline: none;
  }
`;

export const InputIcon = styled.span`
  display: flex;
  align-items: center;
  min-width: 2rem;
  font-size: 2rem;
  color: var(--color-blue-4-a75);
  transition: all var(--transition);
  padding-right: 2rem;
  svg {
    transition: all var(--transition);
  }
`;

export const SuggestionsListWrapper = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  border-radius: 0 0 2rem 2rem;
  margin-top: -3rem;
  padding: 4rem 1rem 1rem 0;
  background-color: #fff;
  box-shadow: var(--color-blue-3) 0 0 0 1px;

  p {
    padding: 1rem;
    text-align: center;
    color: var(--color-blue-4);
  }
`;

export const SuggestionsList = styled.ul`
  max-height: 18rem;
  width: 100%;
  overflow-y: auto;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0 0.5rem 2rem;
    transition: all var(--transition);
    cursor: pointer;

    &:hover,
    &.active {
      background-color: var(--color-blue-1);
    }
  }
`;
