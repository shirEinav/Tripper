import styled from 'styled-components';
import { devices } from '../../devices';

export const FormWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 5rem 0;

  h1 {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    font-size: 3rem;
    font-weight: 600;
  }

  // tablet + mobile
  @media ${devices.break3} {
    padding: 2.5rem 3rem;
  }
  // mobile
  @media ${devices.break1}, ${devices.break2} {
    padding: 2.5rem 4rem;
  }
`;

export const LinkWrapper = styled.p`
  padding-left: 1rem;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;

  a {
    color: var(--color-primary-3);
    text-decoration: underline;

    &:hover {
      color: var(--color-primary-2);
    }
  }
`;

export const Separator = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2.5rem 0;
  text-align: center;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--color-blue-2);
  }
  &::before {
    margin-right: 1.6rem;
  }
  &::after {
    margin-left: 1.6rem;
  }
`;

export const ErrorMessage = styled.p`
  display: flex;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  background-color: var(--color-error-bg);
  font-size: 1.4rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.4rem;
    color: var(--color-error);
  }
`;
