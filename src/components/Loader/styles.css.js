import styled from 'styled-components';

export const StyledLoader = styled.div`
  --loader-color: ${({ color }) => color};
  --loader-size: ${({ size }) => size};

  position: relative;
  left: -9999px;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: 50%;
  margin: 0 auto;
  background-color: var(--loader-color);
  color: var(--loader-color);
  box-shadow: 9999px 0 0 -5px var(--loader-color);
  animation: dotPulse 1.5s infinite linear;
  animation-delay: 0.25s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: var(--loader-size);
    height: var(--loader-size);
    border-radius: 50%;
    background-color: var(--loader-color);
    color: var(--loader-color);
  }

  &::before {
    box-shadow: 9984px 0 0 -5px var(--loader-color);
    animation: dotPulseBefore 1.5s infinite linear;
    animation-delay: 0s;
  }

  &::after {
    box-shadow: 10014px 0 0 -5px var(--loader-color);
    animation: dotPulseAfter 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes dotPulseBefore {
    0% {
      box-shadow: 9984px 0 0 -5px var(--loader-color);
    }
    30% {
      box-shadow: 9984px 0 0 2px var(--loader-color);
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px var(--loader-color);
    }
  }

  @keyframes dotPulse {
    0% {
      box-shadow: 9999px 0 0 -5px var(--loader-color);
    }
    30% {
      box-shadow: 9999px 0 0 2px var(--loader-color);
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px var(--loader-color);
    }
  }

  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10014px 0 0 -5px var(--loader-color);
    }
    30% {
      box-shadow: 10014px 0 0 2px var(--loader-color);
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px var(--loader-color);
    }
  }
`;

export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
