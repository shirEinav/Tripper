import React from 'react';
import { ReactComponent as Illustration } from '../../assets/404.svg';
import Button from '../../components/Button';
import ErrorWrapper from '../../components/ErrorWrapper';
import useAuthContext from '../../hooks/auth/useAuthContext';

const NotFound = () => {
  const { user } = useAuthContext();

  return (
    <ErrorWrapper>
      <Illustration />
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <Button
        style={{ $fontSize: '1.6rem', $padding: '1.5rem 2.5rem' }}
        className='btn-primary'
        isLink
        url={user ? '/dashboard' : '/'}
      >
        Back to Homepage
      </Button>
    </ErrorWrapper>
  );
};

export default NotFound;
