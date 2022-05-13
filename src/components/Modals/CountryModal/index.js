import React, { useEffect, useState } from 'react';
import { StyledTable } from './styles.css';
import { ContentWrapper } from '../../Modal/styles.css';
import useGetCountries from '../../../hooks/useGetCountries';
import Modal from '../../Modal';
import Loader from '../../Loader';
import CountryModalForm from '../../CountryModalForm';

const CountryModal = ({
  isModalOpen,
  setIsModalOpen,
  countryCode,
  countries,
  hasAddTripForm,
}) => {
  const [currentCountry, setCurrentCountry] = useState();

  const { data } = useGetCountries();

  useEffect(() => {
    if (data) {
      const country = data.find(country => country.cca3 === countryCode);

      const countryObject = {
        name: country.name.common,
        code: country.cca3,
        continent: country.continents[0],
        capital: country.capital?.join(', '),
        languages:
          country.languages &&
          Object.entries(country.languages)
            ?.map(country => country[1])
            ?.join(', '),
        population: country.population,
      };

      setCurrentCountry(countryObject);
    }
  }, [data, countryCode]);

  if (!currentCountry) {
    return (
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ContentWrapper minHeight='30rem' contentCentered>
          <Loader color='var(--color-primary-2)' size='1rem' />
        </ContentWrapper>
      </Modal>
    );
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      modalTitle={currentCountry.name}
      modalFlagIcon={currentCountry.code}
    >
      <ContentWrapper>
        <StyledTable>
          <tbody>
            {currentCountry.continent && (
              <tr>
                <th>Continent:</th>
                <td>{currentCountry.continent}</td>
              </tr>
            )}
            {currentCountry.capital && (
              <tr>
                <th>Capital:</th>
                <td>{currentCountry.capital}</td>
              </tr>
            )}
            {currentCountry.languages && (
              <tr>
                <th>Languages:</th>
                <td>{currentCountry.languages}</td>
              </tr>
            )}
            {currentCountry.population && (
              <tr>
                <th>Population:</th>
                <td>{Intl.NumberFormat().format(currentCountry.population)}</td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </ContentWrapper>
      {hasAddTripForm && (
        <CountryModalForm
          currentCountry={currentCountry}
          countries={countries}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Modal>
  );
};

export default CountryModal;
