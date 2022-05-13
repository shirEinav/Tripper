import React from 'react';
import { StyledLoader, LoaderWrapper } from './styles.css';

const Loader = ({ size, color, isCentered }) => {
  if (isCentered) {
    return (
      <LoaderWrapper>
        <StyledLoader size={size} color={color} />
      </LoaderWrapper>
    );
  }
  return <StyledLoader size={size} color={color} />;
};

export default Loader;
