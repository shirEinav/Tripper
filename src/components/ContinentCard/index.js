import React from 'react';
import Card from '../Card';
import Button from '../Button';
import FlagIcon from '../FlagIcon';
import Container from '../Container';

const ContinentCard = ({
  continent,
  countries,
  total,
  setCurrentCountry,
  setIsCountryModalOpen,
}) => {
  const onCountryClickHandler = e => {
    const country = e.currentTarget.id;
    setCurrentCountry(country);
    setIsCountryModalOpen(true);
  };
  return (
    <Card title={continent} subTitle={`${countries.length}/${total} countries`}>
      <Container
        style={{
          $gap: '1rem',
          $flexWrap: 'wrap',
          $padding: '1.5rem 0 0 0',
          $justifyContent: 'flex-start',
        }}
      >
        {countries.map(country => (
          <Button
            id={country.code}
            key={country.code}
            onClickHandler={onCountryClickHandler}
            className='btn-secondary btn-with-icon'
            style={{ $gap: '0.55rem', $padding: '1rem 1.5rem' }}
          >
            <FlagIcon countryCode={country.code} size='1.5rem' />
            {country.name}
          </Button>
        ))}
      </Container>
    </Card>
  );
};

export default ContinentCard;
