import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import * as S from './styles.css';
import Container from '../Container';
import Button from '../Button';
import Tabs from '../Tabs';
import ContinentCard from '../ContinentCard';
import UserStats from '../UserStats';

const SidePanel = ({
  setIsCountryModalOpen,
  setIsAddModalOpen,
  setCurrentCountry,
  countryData,
  isActiveView,
  isMobile,
}) => {
  const [currentTab, setCurrentTab] = useState('visited');
  const [currentTabEmpty, setCurrentTabEmpty] = useState();

  useEffect(() => {
    const isTabEmpty = !countryData[currentTab].some(
      continent => continent.countries.length > 0
    );
    setCurrentTabEmpty(isTabEmpty);
  }, [countryData, currentTab]);

  return (
    <S.SidePanelWrapper className={isActiveView ? 'visible' : undefined}>
      <Container
        style={{
          $justifyContent: 'space-between',
          $marginBottom: '2.5rem',
          $padding: '0 4rem',
        }}
      >
        <h1>My Trips</h1>
        {!isMobile && (
          <Button
            style={{ $padding: '0.5em 0.8em' }}
            className='btn-dark btn-with-icon'
            onClickHandler={() => setIsAddModalOpen(true)}
          >
            <MdOutlineAdd className='icon' />
            Add
          </Button>
        )}
      </Container>
      <UserStats data={countryData} isMobile={isMobile} />
      <Tabs
        tabs={[
          { type: 'visited', label: 'Visited', ref: useRef() },
          { type: 'wishlist', label: 'Want to visit', ref: useRef() },
        ]}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        ariaLabel='Saved Countries'
      >
        {currentTabEmpty && (
          <S.EmptyStateWrapper>
            <h2>No countries added... yet</h2>
            <p>
              You can add countries to your map using the add button or by
              clicking the country on the map.
            </p>
          </S.EmptyStateWrapper>
        )}
        {!currentTabEmpty &&
          countryData[currentTab]
            .filter(item => item.countries.length > 0)
            .map(item => (
              <ContinentCard
                key={item.continent}
                continent={item.continent}
                total={item.totalCountries}
                countries={item.countries}
                setCurrentCountry={setCurrentCountry}
                setIsCountryModalOpen={setIsCountryModalOpen}
              />
            ))}
      </Tabs>
    </S.SidePanelWrapper>
  );
};

export default SidePanel;
