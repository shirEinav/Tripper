import styled from 'styled-components';
import Bg from '../../assets/MapBg.svg';
import { devices } from '../../devices';
import FlagsLeftSrc from '../../assets/FlagsHeroLeft.png';
import FlagsRightSrc from '../../assets/FlagsHeroRight.png';

export const BgWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: calc(100vh - 14rem);
  padding: 13rem 4rem;
  background: url(${Bg}) no-repeat center center;
  background-size: cover;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 60rem;
  text-align: center;
  padding-bottom: 2rem;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;

    span {
      color: var(--color-primary-3);
    }

    // mobile
    @media ${devices.break2} {
      font-size: 4.5rem;
    }
    // small mobile
    @media ${devices.break1} {
      font-size: 4rem;
    }
  }

  p {
    font-size: 2rem;
    margin-bottom: 4.5rem;
  }

  a {
    margin: 0 auto;
  }

  &:before,
  &::after {
    content: '';
    position: absolute;
    // big desktop
    @media ${devices.break5} {
      top: -11rem;
      width: 35rem;
      height: 45rem;
    }
    // normal desktop
    @media ${devices.break4} {
      top: -8rem;
      width: 30rem;
      height: 40rem;
    }
    // tablet
    @media ${devices.break3} {
      top: -6rem;
      width: 25rem;
      height: 35rem;
    }
  }

  &:before {
    background: url(${FlagsLeftSrc}) no-repeat center center;
    background-size: cover;

    // big desktop
    @media ${devices.break5} {
      left: -43rem;
    }
    // normal desktop
    @media ${devices.break4} {
      left: -30rem;
    }
    // tablet
    @media ${devices.break3} {
      left: -20rem;
    }
  }

  &:after {
    background: url(${FlagsRightSrc}) no-repeat center center;
    background-size: cover;

    // big desktop
    @media ${devices.break5} {
      right: -45rem;
    }
    // normal desktop
    @media ${devices.break4}, ${devices.break3} {
      right: -32rem;
    }
    // tablet
    @media ${devices.break3} {
      right: -25rem;
    }
  }
`;
