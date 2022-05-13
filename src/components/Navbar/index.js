import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MdIosShare } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import * as S from './styles.css';
import { ReactComponent as LogoSvg } from '../../assets/Logo.svg';
import useAuthContext from '../../hooks/auth/useAuthContext';
import Container from '../Container';
import Button from '../Button';
import UserMenu from '../UserMenu';
import ShareMapModal from '../Modals/ShareMapModal';

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLogoOnlyNav, setIsLogoOnlyNav] = useState(false);

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const { user } = useAuthContext();
  const { pathname } = useLocation();

  const userMenuRef = useRef();

  useEffect(() => {
    setUserMenuOpen(false);

    if (
      pathname !== '/' &&
      pathname !== '/dashboard' &&
      pathname !== '/account' &&
      !pathname.includes('/maps/')
    ) {
      setIsLogoOnlyNav(true);
    } else {
      setIsLogoOnlyNav(false);
    }
  }, [pathname]);

  // Detect click outside user menu and close it
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (
        userMenuOpen &&
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [userMenuOpen]);

  // Close user menu when document isn't focused
  const onBlurHandler = () => {
    if (!document.hasFocus()) {
      setUserMenuOpen(false);
    }
  };

  return (
    <>
      <S.NavbarWrapper $padding={isLogoOnlyNav && '2.75rem 4rem'}>
        <Container style={{ $justifyContent: 'space-between' }}>
          <S.LogoLink to='/'>
            <LogoSvg />
          </S.LogoLink>
          {!isLogoOnlyNav && user && (
            <Container style={{ $gap: '0.8rem' }}>
              <S.ShareBtn
                type='button'
                onClick={() => setIsShareModalOpen(true)}
              >
                <MdIosShare className='icon' />
              </S.ShareBtn>
              <div
                ref={userMenuRef}
                onBlur={onBlurHandler}
                style={{ position: 'relative', maxHeight: '3rem' }}
              >
                <S.UserBtn
                  type='button'
                  aria-haspopup='true'
                  aria-expanded={userMenuOpen}
                  aria-label='user menu'
                  onClick={() => setUserMenuOpen(prev => !prev)}
                  $isFocused={userMenuOpen}
                >
                  {user.displayName[0].toUpperCase()}
                </S.UserBtn>
                {userMenuOpen && <UserMenu userName={user.displayName} />}
              </div>
            </Container>
          )}
          {!isLogoOnlyNav && !user && (
            <Button
              style={{ $padding: '0.8rem 2.3rem', $fontSize: '1.4rem' }}
              className='btn-secondary'
              isLink
              url='/login'
            >
              Login
            </Button>
          )}
        </Container>
      </S.NavbarWrapper>

      <AnimatePresence>
        {isShareModalOpen && (
          <ShareMapModal
            isModalOpen={isShareModalOpen}
            setIsModalOpen={setIsShareModalOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
