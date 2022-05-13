import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles.css';

const Button = ({
  children,
  id,
  type = 'button',
  onClickHandler,
  isLink,
  url,
  disabled,
  style,
  className,
}) => {
  return (
    <StyledButton
      id={id}
      type={!isLink ? type : undefined}
      as={isLink ? Link : 'button'}
      to={url}
      onClick={onClickHandler}
      disabled={disabled}
      {...style}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
