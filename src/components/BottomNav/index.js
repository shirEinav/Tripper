import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { IoMap, IoList } from 'react-icons/io5';
import * as S from './styles.css';

const BottomNav = ({ currentView, setCurrentView, setIsAddModalOpen }) => {
  return (
    <S.NavWrapper>
      <S.NavButton
        className={currentView === 'list' ? 'active' : undefined}
        onClick={() => setCurrentView('list')}
        aria-current={currentView === 'list'}
      >
        <IoList className='list' /> List
      </S.NavButton>
      <S.NavButton onClick={() => setIsAddModalOpen(true)}>
        <MdAddCircle className='add' /> Add trip
      </S.NavButton>
      <S.NavButton
        className={currentView === 'map' ? 'active' : undefined}
        onClick={() => setCurrentView('map')}
        aria-current={currentView === 'map'}
      >
        <IoMap className='map' /> Map
      </S.NavButton>
    </S.NavWrapper>
  );
};

export default BottomNav;
