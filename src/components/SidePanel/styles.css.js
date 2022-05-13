import styled from 'styled-components';
import { devices } from '../../devices';

export const SidePanelWrapper = styled.section`
  height: calc(100vh - 7.1rem);
  padding: 2rem 0;
  overflow-y: auto;
  transition: all var(--transition);

  // desktop
  @media ${devices.break4}, ${devices.break5} {
    width: 60%;
    min-width: 50rem;
  }
  // tablet + mobile
  @media ${devices.break1}, ${devices.break2}, ${devices.break3} {
    width: 100%;
    padding-bottom: 10rem;
    display: none;

    &.visible {
      display: block;
    }
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const EmptyStateWrapper = styled.section`
  margin-top: 1rem;
  padding: 1.5rem;

  h2 {
    margin-bottom: 0.7rem;
    font-size: 1.9rem;
    font-weight: 500;
  }

  p {
    font-size: 1.4rem;
  }
`;

export const TitleSkeleton = styled.div`
  max-width: 30rem;
  height: 4rem;
  margin: 0 4rem;
`;

export const StatsSkeleton = styled.div`
  border-bottom: 1px solid var(--color-blue-2);
  div {
    height: 15rem;
    max-width: 100%;
    margin: 2rem 4rem 4rem;
  }
`;

export const TabsSkeleton = styled.div`
  max-width: 21rem;
  height: 4rem;
  margin: 4rem;
  border-radius: 5rem;
`;

export const CardSkeleton = styled.div`
  max-width: 100%;
  height: 18rem;
  margin: 3rem 4rem;
`;
