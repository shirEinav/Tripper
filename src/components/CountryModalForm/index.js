import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import useAuthContext from '../../hooks/auth/useAuthContext';
import useAddTrip from '../../hooks/firestore/useAddTrip';
import useDeleteTrip from '../../hooks/firestore/useDeleteTrip';
import { ContentWrapper } from '../Modal/styles.css';
import CountryListRadioBtns from '../CountryListRadioBtns';
import Button from '../Button';
import Loader from '../Loader';

const CountryModalForm = ({ currentCountry, countries, setIsModalOpen }) => {
  const [selectedCountryList, setSelectedCountryList] = useState();
  const [isCountryInList, setIsCountryInList] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { user } = useAuthContext();

  const { mutateAsync: addTrip, isLoading: addLoading } = useAddTrip();
  const { mutateAsync: deleteTrip, isLoading: deleteLoading } = useDeleteTrip();

  useEffect(() => {
    if (!currentCountry || !countries || addLoading || deleteLoading) return;

    const isInVisited = countries.visited.find(
      country => country.code === currentCountry.code
    );
    const isInWishlist = countries.wishlist.find(
      country => country.code === currentCountry.code
    );

    const countryList = isInVisited
      ? 'visited'
      : isInWishlist
      ? 'wishlist'
      : '';

    setIsCountryInList(!!countryList);
    setSelectedCountryList(countryList);
  }, [currentCountry, countries, addLoading, deleteLoading]);

  const onClickChangeHandler = e => {
    setSelectedCountryList(e.target.value);
    setButtonDisabled(false);
  };

  const onKeyChangeHandler = input => {
    setSelectedCountryList(input.value);
    setButtonDisabled(false);
  };

  const onAddTripHandler = e => {
    e.preventDefault();

    const tripData = {
      userId: user.uid,
      name: currentCountry.name,
      code: currentCountry.code,
      continent: currentCountry.continent.toLowerCase().replace(/ /g, ''),
      list: selectedCountryList,
    };
    addTrip(tripData).then(() => setIsModalOpen(false));
  };

  const onDeleteTripHandler = () => {
    const tripData = {
      userId: user.uid,
      name: currentCountry.name,
      continent: currentCountry.continent.toLowerCase().replace(/ /g, ''),
    };
    deleteTrip(tripData).then(() => setIsModalOpen(false));
  };

  return (
    <form onSubmit={onAddTripHandler}>
      <ContentWrapper $padding='0 3rem 3rem 3rem'>
        <CountryListRadioBtns
          onClickChange={onClickChangeHandler}
          onKeyChange={onKeyChangeHandler}
          selectedCountryList={selectedCountryList}
        />
      </ContentWrapper>
      <ContentWrapper
        $padding='3rem 3rem 2rem 3rem'
        $borderTop='1px solid var(--color-blue-3)'
      >
        <Button
          type='submit'
          className={`${
            buttonDisabled ? 'btn-disabled' : 'btn-primary'
          } btn-with-icon btn-form`}
          disabled={buttonDisabled}
        >
          {addLoading ? (
            <Loader size='0.6rem' color='#fff' />
          ) : isCountryInList ? (
            'Update Trip'
          ) : (
            <>
              <MdAdd /> Add Trip
            </>
          )}
        </Button>
        {isCountryInList && (
          <Button className='btn-warning' onClickHandler={onDeleteTripHandler}>
            {deleteLoading ? (
              <Loader color='var(--color-error)' size='0.6rem' />
            ) : (
              'Remove Trip'
            )}
          </Button>
        )}
      </ContentWrapper>
    </form>
  );
};

export default CountryModalForm;
