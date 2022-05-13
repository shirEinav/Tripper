import React from 'react';
import * as S from './styles.css';

const Tabs = ({ children, tabs, currentTab, setCurrentTab, ariaLabel }) => {
  const onClickHandler = e => {
    setCurrentTab(e.currentTarget.id);
  };

  const onKeydownHandler = e => {
    let currentIndex = +e.currentTarget.dataset.index;

    if (e.code === 'ArrowLeft') {
      if (currentIndex === 0) return;
      tabs[currentIndex - 1].ref.current.focus();
    }
    if (e.code === 'ArrowRight') {
      if (currentIndex === tabs.length - 1) return;
      tabs[currentIndex + 1].ref.current.focus();
    }
  };

  return (
    <S.TabsWrapper>
      <S.TabsButtonWrapper role='tablist' aria-label={ariaLabel}>
        {tabs.map((tab, index) => (
          <S.TabsButton
            key={tab.type}
            role='tab'
            id={tab.type}
            tabIndex={currentTab === tab.type ? '0' : '-1'}
            isActive={currentTab === tab.type}
            aria-selected={currentTab === tab.type}
            aria-controls={`${tab.type}-tab`}
            data-index={index}
            onClick={onClickHandler}
            onKeyDown={onKeydownHandler}
            ref={tab.ref}
          >
            {tab.label}
          </S.TabsButton>
        ))}
      </S.TabsButtonWrapper>
      <div role='tabpanel' aria-labelledby={currentTab} tabIndex='0'>
        {children}
      </div>
    </S.TabsWrapper>
  );
};
export default Tabs;
