import React, { useEffect, useState } from 'react';
import Container from '../Container';
import * as S from './styles.css';

const CircularProgressBar = ({
  size = '100',
  strokeWidth = '9',
  percentage,
  numLabel,
  title,
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <Container style={{ $direction: 'column', $gap: '0.8rem' }}>
      <S.ProgressTitle>{title}</S.ProgressTitle>
      <S.ProgressBarWrapper>
        <svg width='8.5rem' height='8.5rem' viewBox={viewBox}>
          <circle
            fill='none'
            stroke='var(--color-primary-1)'
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            fill='none'
            stroke='var(--color-primary-2)'
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDasharray={[dash, circumference - dash]}
            strokeLinecap='round'
            style={{ transition: 'all 0.5s' }}
          />
        </svg>
        <S.ValueLabel>
          {numLabel && numLabel}
          {!numLabel && (
            <>
              {percentage} <span>%</span>
            </>
          )}
        </S.ValueLabel>
      </S.ProgressBarWrapper>
    </Container>
  );
};

export default CircularProgressBar;
