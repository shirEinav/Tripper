import styled from 'styled-components';
import { devices } from '../../devices';

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  background: var(--color-blue-1);
  height: calc(100vh - 7.1rem);

  &.dashboard-map {
    // desktop
    @media ${devices.break4}, ${devices.break5} {
      border-left: 1px solid var(--color-blue-2);
    }
    // tablet + mobile
    @media ${devices.break1}, ${devices.break2}, ${devices.break3} {
      display: none;

      &.visible {
        display: block;
      }
    }
  }

  &.shared-map {
    // desktop
    @media ${devices.break4}, ${devices.break5} {
      border-radius: 2rem;
      overflow: hidden;
    }
  }

  div.leaflet-container {
    background-color: var(--color-blue-1);
  }

  .leaflet-touch .leaflet-control-layers,
  .leaflet-touch .leaflet-bar {
    border: 1.5px solid var(--color-blue-2);
  }
`;

export const MapLegend = styled.ul`
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  padding: 1rem 1.5rem;
  border: 1.5px solid var(--color-blue-2);
  border-radius: 1rem;
  background-color: #fff;
  font-size: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const MapLegendColor = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.4rem;
  background-color: ${({ color }) => color};
`;
