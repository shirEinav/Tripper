import React from 'react';
import { MdVisibilityOff, MdVisibility, MdError } from 'react-icons/md';
import * as S from './styles.css';

const Input = ({
  type,
  id,
  label,
  value,
  setValue,
  isError,
  errorMessage,
  showPassword,
  setShowPassword,
  maxLength,
  onChange,
}) => {
  const inputChangeHandler = e => {
    setValue(e.target.value);
    if (onChange) onChange();
  };
  const togglePasswordVisible = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <S.InputWrapper>
      <S.InputInnerWrapper>
        <S.StyledInput
          id={id}
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          maxLength={maxLength}
          onChange={inputChangeHandler}
          aria-invalid={!!errorMessage || isError}
          aria-errormessage={errorMessage ? `${id}-error` : ''}
          hasText={!!value}
          hasError={!!errorMessage || isError}
        />
        <label htmlFor={id}>{label}</label>

        {type === 'password' && (
          <button
            type='button'
            aria-label={showPassword ? 'Hide password' : 'Show Password'}
            onClick={togglePasswordVisible}
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </S.InputInnerWrapper>
      {errorMessage && (
        <S.ErrorMessage>
          <MdError /> {errorMessage}
        </S.ErrorMessage>
      )}
    </S.InputWrapper>
  );
};

export default Input;
