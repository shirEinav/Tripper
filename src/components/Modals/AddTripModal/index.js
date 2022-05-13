import React, { createRef, useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { ContentWrapper } from '../../Modal/styles.css';
import useAuthContext from '../../../hooks/auth/useAuthContext';
import useGetCountries from '../../../hooks/useGetCountries';
import useAddTrip from '../../../hooks/firestore/useAddTrip';
import Button from '../../Button';
import Modal from '../../Modal';
import AutocompleteCountries from '../../AutocompleteCountries';
import Loader from '../../Loader';
import CountryListRadioBtns from '../../CountryListRadioBtns';

const AddTripModal = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCountryList, setSelectedCountryList] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [countrySuggestions, setCountrySuggestions] = useState([]);

  const { data, isLoading } = useGetCountries();
  const { mutateAsync: addTrip, isLoading: addLoading } = useAddTrip();

  const { user } = useAuthContext();

  useEffect(() => {
    if (data) {
      const suggestions = data.map(country => ({
        name: country.name.common,
        code: country.cca3,
        ref: createRef(),
      }));

      setCountrySuggestions(suggestions);
    }
  }, [data]);

  useEffect(() => {
    if (!!selectedCountry && !!selectedCountryList) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [selectedCountry, selectedCountryList]);

  const onSubmitHandler = e => {
    e.preventDefault();
    const country = data.find(
      country => country.name.common === selectedCountry
    );

    const tripData = {
      userId: user.uid,
      name: country.name.common,
      code: country.cca3,
      continent: country.continents[0].toLowerCase().replace(/ /g, ''),
      list: selectedCountryList,
    };

    addTrip(tripData).then(() => setIsModalOpen(false));
  };

  if (isLoading && !data) {
    return (
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalTitle='Add a new trip'
      >
        <ContentWrapper minHeight='35.2rem' contentCentered>
          <Loader color='var(--color-primary-2)' size='1rem' />
        </ContentWrapper>
      </Modal>
    );
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      modalTitle='Add a new trip'
    >
      <form onSubmit={onSubmitHandler}>
        <ContentWrapper>
          <AutocompleteCountries
            countries={countrySuggestions}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

          <CountryListRadioBtns
            titleVisible
            selectedCountryList={selectedCountryList}
            onClickChange={e => setSelectedCountryList(e.target.value)}
            onKeyChange={input => setSelectedCountryList(input.value)}
          />
        </ContentWrapper>
        <ContentWrapper $borderTop='1px solid var(--color-blue-3)'>
          <Button
            type='submit'
            className={`${
              buttonDisabled ? 'btn-disabled' : 'btn-primary'
            } btn-with-icon btn-form`}
            disabled={buttonDisabled}
          >
            {addLoading ? (
              <Loader size='0.6rem' color='#fff' />
            ) : (
              <>
                <MdAdd /> Add Trip
              </>
            )}
          </Button>
        </ContentWrapper>
      </form>
    </Modal>
  );
};

export default AddTripModal;
