import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

import useTripsSnapshot from '../../hooks/firestore/useTripsSnapshot';
import useCalcStats from '../../hooks/useCalcStats';
import useGetCountries from '../../hooks/useGetCountries';

import * as S from './styles.css';
import CountryModal from '../../components/Modals/CountryModal';
import Container from '../../components/Container';
import CircularProgressBar from '../../components/CircularProgressBar';
import Map from '../../components/Map';
import { MapWrapper } from '../../components/Map/styles.css';

const SharedMap = () => {
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [currentCountryCode, setCurrentCountryCode] = useState({});

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { fullData, countriesData } = useTripsSnapshot(pathname.slice(6));

  const { isLoading } = useGetCountries();

  const { numOfCountries, numOfContinents, precentageOfWorld } =
    useCalcStats(fullData);

  useEffect(() => {
    const checkIfUserExists = async () => {
      const docRef = doc(db, 'maps', pathname.slice(6));
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        navigate('/notfound');
      }
    };
    checkIfUserExists();
  }, [navigate, pathname]);

  if (!fullData || !countriesData || isLoading) {
    return (
      <S.SharedMapWrapper>
        <S.TitleSkeleton className='skeleton' />
        <S.StatsSkeleton className='skeleton' />
        <MapWrapper className='shared-map'></MapWrapper>
      </S.SharedMapWrapper>
    );
  }

  return (
    <>
      <header className='inner-page-header'>
        <h1>{fullData.name}</h1>
      </header>
      <S.SharedMapWrapper>
        <S.StatsText>
          Explored <span>{precentageOfWorld}%</span> of the world
        </S.StatsText>
        <Container style={{ $gap: '2rem', $marginBottom: '3rem' }}>
          <CircularProgressBar
            title='Countries'
            percentage={numOfCountries?.percentage}
            numLabel={numOfCountries?.numLabel}
          />
          <CircularProgressBar
            title='Continents'
            percentage={numOfContinents?.percentage}
            numLabel={numOfContinents?.numLabel}
          />
        </Container>

        <Map
          setIsCountryModalOpen={setIsCountryModalOpen}
          setCurrentCountry={setCurrentCountryCode}
          className='shared-map'
          countries={countriesData}
          hasMapLegend
        />
      </S.SharedMapWrapper>
      <AnimatePresence>
        {isCountryModalOpen && currentCountryCode && (
          <CountryModal
            isModalOpen={isCountryModalOpen}
            setIsModalOpen={setIsCountryModalOpen}
            countryCode={currentCountryCode}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SharedMap;
