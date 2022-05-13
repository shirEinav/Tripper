import React from 'react';
import Navbar from '../Navbar';
import ErrorWrapper from '../ErrorWrapper';
import Button from '../Button';

const ErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <>
      <Navbar />
      <ErrorWrapper>
        <h1>Oh no! Something went wrong...</h1>
        <p>It Looks like something went wrong... Please try again.</p>
        <Button
          style={{ $fontSize: '1.6rem', $padding: '1.5rem 2.5rem' }}
          className='btn-primary'
          onClickHandler={resetErrorBoundary}
        >
          Try Again
        </Button>
      </ErrorWrapper>
    </>
  );
};

export default ErrorFallback;
