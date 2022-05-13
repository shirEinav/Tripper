import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { devices } from './devices';

export default createGlobalStyle`
  ${normalize}
  
  :root{
    --color-primary-1: hsl(167, 85%, 89%);
    --color-primary-2: hsl(173, 80%, 40%);
    --color-primary-3: hsl(175, 84%, 32%);
    
    --color-secondary-1: hsl(55, 97%, 90%);
    --color-secondary-2: hsl(48, 96%, 53%);
    --color-secondary-3: hsl(45, 93%, 47%);

    --color-blue-1: hsl(252, 38%, 97%);
    --color-blue-2: hsl(226, 37%, 93%);
    --color-blue-3: hsl(226, 36%, 86%);
    --color-blue-4: hsl(226, 14%, 48%);
    --color-blue-5: hsl(227, 37%, 27%);

    --color-blue-1-a50: hsla(220, 14%, 96%, 50%);
    --color-blue-4-a75: hsla(226, 14%, 48%, 75%);
    --color-blue-dark-a75: hsla(226, 37%, 20%, 75%);
    --color-primary-1-a50: hsla(167, 85%, 89%, 50%);
    --color-secondary-2-a40: hsla(48, 96%, 53%, 40%);

    --color-error: hsl(351, 65%, 57%);
    --color-error-bg: hsla(351, 65%, 57%, 20%);

    --transition: 0.2s ease;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    background-color: transparent;
    color: inherit;
    border-width: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  html{
  @media ${devices.break1}, ${devices.break2} {
    font-size: 50%; // 1rem = 8px
  }
  @media ${devices.break3} {
    font-size: 56.25%; // 1rem = 9px
  }
  @media ${devices.break4} {
    font-size: 62.5%; // 1rem = 10px
  }
  @media ${devices.break5} {
    font-size: 75%; // 1rem = 12px
  }
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    color: var(--color-blue-5);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
    overflow: hidden;
  }

 .inner-page-header {
    width: 100%;
    padding: 3rem;
    margin-bottom: 2rem;
    background-color: var(--color-blue-1-a50);
    text-align: center;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }
  }

  .skeleton {
    border-radius: 1.5rem;
    background-image: linear-gradient(
    90deg,
    var(--color-blue-1),
    var(--color-blue-1-a50) 4rem,
    var(--color-blue-1) 8rem
    );
    background-size: 200%;
    animation: skelteonAnim 1.3s linear infinite forwards;
  }

  @keyframes skelteonAnim {
  0% {
    background-position: 100% 0;
  }
  40%,
  100% {
    background-position: -100% 0;
  }
}
`;
