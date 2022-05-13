import React, { useRef } from 'react';
import { StyledRadio } from './styles.css';

const RadioButton = ({
  children,
  id,
  value,
  name,
  isChecked,
  onChangeHandler,
  onKeyChangeHandler,
}) => {
  const inputRef = useRef();

  const onKeydownHandler = e => {
    if (e.code === 'Enter' || e.code === 'Space') {
      onKeyChangeHandler(inputRef.current);
    }
  };
  return (
    <>
      <StyledRadio
        role='radio'
        ref={inputRef}
        type='radio'
        id={id}
        value={value}
        name={name}
        checked={isChecked}
        aria-checked={isChecked}
        onChange={onChangeHandler}
        tabIndex='-1'
      />
      <label tabIndex='0' onKeyDown={onKeydownHandler} htmlFor={id}>
        {children}
      </label>
    </>
  );
};

export default RadioButton;
