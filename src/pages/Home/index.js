import React from 'react';
import * as S from './styles.css';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <S.BgWrapper>
        <S.ContentWrapper>
          <h1>
            Track your <span>travels</span>
          </h1>
          <p>
            Create a personalized map to track your travels and share it with
            your friends!
          </p>
          <Button
            style={{ $fontSize: '1.7rem', $padding: '1.5rem 2.5rem' }}
            className='btn-primary'
            isLink
            url='/signup'
          >
            Create a travel map
          </Button>
        </S.ContentWrapper>
      </S.BgWrapper>
      <Footer />
    </>
  );
};

export default Home;
