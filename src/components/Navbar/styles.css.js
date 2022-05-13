import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
  border-bottom: 1px solid var(--color-blue-3);
  padding: ${({ $padding }) => ($padding ? $padding : '2rem 4rem')};
`;

export const LogoLink = styled(Link)`
  width: 11rem;
  max-width: 11rem;
  line-height: 0;
`;

export const UserBtn = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: var(--color-primary-3);
  color: #fff;
  text-align: center;
  border-radius: 50%;
  transition: all var(--transition);

  box-shadow: ${({ $isFocused }) =>
    $isFocused && 'var(--color-blue-3) 0 0 0 3px'};

  &:hover {
    box-shadow: ${({ $isFocused }) =>
      !$isFocused && 'var(--color-blue-2) 0 0 0 3px'};
  }
`;

export const ShareBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid var(--color-blue-3);
  font-size: 1.4rem;
  transition: all var(--transition);

  &:hover {
    background-color: var(--color-blue-1);
  }
`;
