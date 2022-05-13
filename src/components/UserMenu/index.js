import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles.css';
import useLogout from '../../hooks/auth/useLogout';
import Loader from '../Loader';

const UserMenu = ({ userName }) => {
  const { loading, logout } = useLogout('/');

  return (
    <S.MenuList role='menu' tabIndex='0'>
      <S.MenuItem className='username' role='menuitem'>
        {userName}
      </S.MenuItem>
      <S.MenuDivider role='separator' />
      <S.MenuItem>
        <Link className='link' to='/account' role='menuitem'>
          Account settings
        </Link>
      </S.MenuItem>
      <S.MenuItem>
        <button className='link' type='button' onClick={logout} role='menuitem'>
          {loading ? (
            <Loader size='0.5rem' color='var(--color-primary-2)' />
          ) : (
            'Log out'
          )}
        </button>
      </S.MenuItem>
    </S.MenuList>
  );
};

export default UserMenu;
