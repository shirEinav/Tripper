import styled from 'styled-components';

export const NavWrapper = styled.div`
  position: fixed;
  z-index: 1050;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1.1rem 4rem;
  border-top: 1px solid var(--color-blue-3);
  background-color: #fff;
`;

export const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-blue-4-a75);
  font-size: 1.5rem;
  text-align: center;

  .map {
    font-size: 2.2rem;
  }

  .list {
    font-size: 2.4rem;
  }

  .add {
    margin-top: -3.5rem;
    margin-bottom: 0.2rem;
    border-radius: 50%;
    background-color: #fff;
    font-size: 5.5rem;
    color: var(--color-primary-3);
  }

  &.active {
    color: var(--color-primary-3);
    font-family: 500;
  }
`;
