import styled from 'styled-components';

export const MenuList = styled.ul`
  position: absolute;
  top: 35%;
  right: 0;
  overflow-y: auto;
  z-index: 1050;
  display: block;
  min-width: 23rem;
  max-width: 100%;
  max-height: calc(100vh - 10rem);
  padding: 1rem 0;
  margin-top: 3rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-blue-3);
  background: #fff;
`;

export const MenuItem = styled.li`
  .link,
  &.username {
    padding: 0.75rem 2rem;
  }

  .link {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    transition: all 0.2s ease;

    &:hover {
      background-color: var(--color-blue-1-a50);
    }
  }

  &.username {
    font-size: 1.6rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const MenuDivider = styled.li`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
  background-color: var(--color-blue-2);
`;
