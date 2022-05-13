import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';
import * as S from './styles.css';
import Button from '../Button';
import CircularProgressBar from '../CircularProgressBar';
import useCalcStats from '../../hooks/useCalcStats';

const UserStats = ({ data, isMobile }) => {
  const [fullStatsVisible, setFullStatsVisible] = useState(false);
  const [stats, setSats] = useState();

  const { numOfCountries, numOfContinents, continentData } = useCalcStats(data);

  useEffect(() => {
    if (!numOfCountries || !numOfContinents || !continentData) return;

    setSats([numOfCountries, numOfContinents, ...continentData]);
  }, [numOfCountries, numOfContinents, continentData]);

  if (isMobile) {
    return (
      <S.StatsSlider>
        {stats?.map(({ title, percentage, numLabel }) => (
          <CircularProgressBar
            key={title}
            title={title}
            percentage={percentage}
            numLabel={numLabel}
          />
        ))}
      </S.StatsSlider>
    );
  }

  return (
    <S.StatsWrapper $fullStats={fullStatsVisible}>
      <S.FlexWrapper>
        {stats?.slice(0, 4)?.map(({ title, percentage, numLabel }) => (
          <CircularProgressBar
            key={title}
            title={title}
            percentage={percentage}
            numLabel={numLabel}
          />
        ))}
      </S.FlexWrapper>
      <AnimatePresence>
        {fullStatsVisible && (
          <S.FlexWrapper
            key='allStats'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto', margin: '0 0 2rem 0' },
              collapsed: { opacity: 0, height: 0, margin: 0 },
            }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {stats?.slice(-4)?.map(({ title, percentage }) => (
              <CircularProgressBar
                key={title}
                title={title}
                percentage={percentage}
              />
            ))}
          </S.FlexWrapper>
        )}
      </AnimatePresence>
      <Button
        className='btn-text btn-with-icon'
        onClickHandler={() => setFullStatsVisible(prevState => !prevState)}
      >
        <MdKeyboardArrowDown className='arrow' />
        {fullStatsVisible ? 'Show less' : 'Show all stats'}
      </Button>
    </S.StatsWrapper>
  );
};

export default UserStats;
