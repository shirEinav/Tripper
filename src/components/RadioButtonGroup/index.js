import React from 'react';
import { RadioButtonsWrapper } from './styles.css';

const RadioButtonGroup = ({ children, title, isTitleVisible }) => {
  return (
    <RadioButtonsWrapper>
      <h3 id='title' className={isTitleVisible ? undefined : 'visually-hidden'}>
        {title}
      </h3>
      <div role='radiogroup' aria-labelledby='title'>
        {children}
      </div>
    </RadioButtonsWrapper>
  );
};

export default RadioButtonGroup;
