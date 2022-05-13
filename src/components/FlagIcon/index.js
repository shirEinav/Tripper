import React from 'react';
import FlagsUrl from '../../assets/FlagIcons.svg';

const FlagIcon = ({ countryCode, size }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 500 500'>
      <use href={`${FlagsUrl}#${countryCode}`}></use>
    </svg>
  );
};

export default FlagIcon;
