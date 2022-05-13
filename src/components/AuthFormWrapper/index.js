import React from 'react';
import { MdError } from 'react-icons/md';
import * as S from './styles.css';
import useGoogleOAuth from '../../hooks/auth/useGoogleOAuth';
import { ReactComponent as GoogleLogo } from '../../assets/GoogleLogo.svg';
import Button from '../Button';
import Loader from '../Loader';

const AuthFormWrapper = ({ children, hasGoogleLogin, error }) => {
  const { loading: googleLoading, googleLogin } = useGoogleOAuth();

  return (
    <S.FormWrapper>
      {error && (
        <S.ErrorMessage>
          <MdError /> {error}
        </S.ErrorMessage>
      )}
      {children}
      {hasGoogleLogin && (
        <>
          <S.Separator className='separator'>or</S.Separator>
          <Button
            style={{
              $fontSize: '1.6rem',
              $padding: '2rem',
              $width: '100%',
              $minHeight: '5.64rem',
            }}
            className='btn-secondary btn-with-icon'
            onClickHandler={googleLogin}
          >
            {googleLoading ? (
              <Loader size='0.6rem' color='var(--color-primary-2)' />
            ) : (
              <>
                <GoogleLogo style={{ height: '1.5rem' }} /> Continue with Google
              </>
            )}
          </Button>
        </>
      )}
    </S.FormWrapper>
  );
};

export default AuthFormWrapper;
