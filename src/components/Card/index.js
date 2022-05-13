import React from 'react';
import { CardWrapper } from './styles.css';

const Card = ({ children, title, subTitle }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
      {children}
    </CardWrapper>
  );
};

export default Card;
