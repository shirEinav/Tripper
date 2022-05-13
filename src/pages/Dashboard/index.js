import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IoMap, IoList } from 'react-icons/io5';

import useViewportSize from '../../hooks/useViewportSize';
import useTripsSnapshot from '../../hooks/firestore/useTripsSnapshot';
import useGetCountries from '../../hooks/useGetCountries';

import * as S from './styles.css';
import * as Sk from '../../components/SidePanel/styles.css';
import Container from '../../components/Container';
import SidePanel from '../../components/SidePanel';
import Map from '../../components/Map';
import { MapWrapper } from '../../components/Map/styles.css';
import CountryModal from '../../components/Modals/CountryModal';
import AddTripModal from '../../components/Modals/AddTripModal';
import Button from '../../components/Button';
import BottomNav from '../../components/BottomNav';

const Dashboard = () => {
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [currentCountryCode, setCurrentCountryCode] = useState({});

  const [currentView, setCurrentView] = useState('list');
  const width = useViewportSize();

  const { fullData, countriesData } = useTripsSnapshot();
  const { isLoading } = useGetCountries();

  if (!fullData || !countriesData || isLoading) {
    return (
      <Container>
        <Sk.SidePanelWrapper className='visible'>
          <Sk.TitleSkeleton className='skeleton' />
          <Sk.StatsSkeleton>
            <div className='skeleton'></div>
          </Sk.StatsSkeleton>
          <Sk.TabsSkeleton className='skeleton' />
          <Sk.CardSkeleton className='skeleton' />
        </Sk.SidePanelWrapper>
        <MapWrapper className='dashboard-map' />
      </Container>
    );
  }

  return (
    <S.MainWrapper>
      <Container>
        <SidePanel
          setIsCountryModalOpen={setIsCountryModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          setCurrentCountry={setCurrentCountryCode}
          countryData={fullData}
          isActiveView={currentView === 'list'}
          isMobile={width < 500}
        />
        <Map
          setIsCountryModalOpen={setIsCountryModalOpen}
          setCurrentCountry={setCurrentCountryCode}
          countries={countriesData}
          className='dashboard-map'
          hasZoomOnScroll
          isActiveView={currentView === 'map'}
        />
      </Container>

      {width < 950 && width > 500 && (
        <S.SwitchViewToggle>
          <Button
            style={{ $padding: '1.5rem 2rem', $gap: '0.8rem' }}
            className='btn-dark btn-with-icon'
            onClickHandler={() =>
              setCurrentView(prev => (prev === 'list' ? 'map' : 'list'))
            }
          >
            {currentView === 'list' ? (
              <>
                <IoMap /> Show map
              </>
            ) : (
              <>
                <IoList /> Show list
              </>
            )}
          </Button>
        </S.SwitchViewToggle>
      )}

      {width < 500 && (
        <BottomNav
          currentView={currentView}
          setCurrentView={setCurrentView}
          setIsAddModalOpen={setIsAddModalOpen}
        />
      )}

      <AnimatePresence>
        {isCountryModalOpen && currentCountryCode && (
          <CountryModal
            isModalOpen={isCountryModalOpen}
            setIsModalOpen={setIsCountryModalOpen}
            countryCode={currentCountryCode}
            countries={countriesData}
            hasAddTripForm
          />
        )}
        {isAddModalOpen && (
          <AddTripModal
            isModalOpen={isAddModalOpen}
            setIsModalOpen={setIsAddModalOpen}
          />
        )}
      </AnimatePresence>
    </S.MainWrapper>
  );
};

export default Dashboard;
