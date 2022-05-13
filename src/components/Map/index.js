import React, { useEffect, useRef } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import countriesData from './../../data/countries.json';
import 'leaflet/dist/leaflet.css';
import * as S from './styles.css';

const Map = ({
  setIsCountryModalOpen,
  setCurrentCountry,
  countries,
  className,
  hasZoomOnScroll,
  hasMapLegend,
  isActiveView,
}) => {
  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.invalidateSize();
  }, [isActiveView]);

  const eachCountryStyle = country => {
    const commonStyle = {
      fillOpacity: 0.7,
      color: 'var(--color-blue-1)',
      weight: 0.8,
    };

    if (countries.visited.some(c => c.code === country.properties.iso_a3)) {
      return { ...commonStyle, fillColor: 'var(--color-primary-2)' };
    }
    if (countries.wishlist.some(c => c.code === country.properties.iso_a3)) {
      return { ...commonStyle, fillColor: 'var(--color-secondary-2-a40)' };
    }
    return { ...commonStyle, fillColor: 'var(--color-blue-3)' };
  };

  const onEachCountry = (country, layer) => {
    if (!country.properties.iso_a3) {
      return;
    }
    layer.on({
      click: () => {
        setCurrentCountry(country.properties.iso_a3);
        setIsCountryModalOpen(true);
      },
      mouseover: e => {
        e.target.setStyle({ fillOpacity: 0.5 });
      },
      mouseout: e => {
        e.target.setStyle({ fillOpacity: 0.7 });
      },
    });
  };

  return (
    <S.MapWrapper className={`${className} ${isActiveView ? 'visible' : ''}`}>
      {hasMapLegend && (
        <S.MapLegend>
          <li>
            <S.MapLegendColor color='var(--color-primary-2)' /> Visited
            countries
          </li>
          <li>
            <S.MapLegendColor color='var(--color-secondary-2-a40)' /> Want to
            visit
          </li>
        </S.MapLegend>
      )}
      <MapContainer
        style={{ height: '100%' }}
        zoom={2}
        center={[40, 0]}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        scrollWheelZoom={hasZoomOnScroll}
        ref={mapRef}
      >
        <GeoJSON
          data={countriesData.features}
          style={eachCountryStyle}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </S.MapWrapper>
  );
};

export default Map;
