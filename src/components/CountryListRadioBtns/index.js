import React from 'react';
import { IoFlag, IoHeart } from 'react-icons/io5';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../RadioButton';

const CountryListRadioBtns = ({
  titleVisible,
  selectedCountryList,
  onClickChange,
  onKeyChange,
}) => {
  return (
    <RadioButtonGroup title='Mark country as:' isTitleVisible={titleVisible}>
      <RadioButton
        type='radio'
        value='visited'
        name='country-list'
        id='radio-visited'
        isChecked={selectedCountryList === 'visited'}
        onChangeHandler={onClickChange}
        onKeyChangeHandler={onKeyChange}
      >
        <IoFlag />
        <span>Visited</span>
      </RadioButton>

      <RadioButton
        type='radio'
        value='wishlist'
        name='country-list'
        id='radio-wishlist'
        isChecked={selectedCountryList === 'wishlist'}
        onChangeHandler={onClickChange}
        onKeyChangeHandler={onKeyChange}
      >
        <IoHeart />
        <span>Want to visit</span>
      </RadioButton>
    </RadioButtonGroup>
  );
};

export default CountryListRadioBtns;
