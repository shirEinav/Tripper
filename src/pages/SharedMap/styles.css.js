import styled from 'styled-components';
import { devices } from '../../devices';

export const SharedMapWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;

  // desktop
  @media ${devices.break4}, ${devices.break5} {
    padding-bottom: 4rem;
  }
`;

export const StatsText = styled.p`
  margin: 3rem 0 2rem 0;
  text-align: center;

  span {
    font-weight: 500;
    color: var(--color-primary-3);
  }
`;

export const TitleSkeleton = styled.div`
  max-width: 30rem;
  height: 4rem;
  margin: 3rem auto 5rem auto;
`;

export const StatsSkeleton = styled.div`
  max-width: 40rem;
  height: 16rem;
  margin: 3rem auto;

  // desktop
  @media ${devices.break4}, ${devices.break5} {
    margin: 3rem auto;
  }
  // tablet + mobile
  @media ${devices.break1}, ${devices.break2}, ${devices.break3} {
    margin: 4rem auto;
  }
`;
