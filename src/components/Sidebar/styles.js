// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.aside`
  background: #343a40;
  bottom: 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: block;
  float: none;
  height: 100vh;
  left: 0;
  margin-left: ${({ isOpened }) => (isOpened ? 0 : '-250px')};
  min-height: 100%;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
  width: 250px;
  z-index: 1036;

  @media (max-width: 576px) {
    bottom: 0;
    float: none;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
  }

  > a {
    background-color: transparent;
    border-bottom: 1px solid #4b545c;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.8125rem 0.5rem;
    text-decoration: none;
    transition: width 0.3s ease-in-out;
    white-space: nowrap;
    width: 250px;

    > img {
      border-style: none;
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 34px;
      opacity: 0.8;
      width: auto;
      vertical-align: middle;
    }

    > span {
      transition: margin-left 0.3s linear, opacity 0.3s ease,
        visibility 0.3s ease;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.25rem;
      line-height: 1.5;
      white-space: nowrap;
    }
  }
`;

export const Content = styled.div`
  overflow: hidden;
  position: relative;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  height: calc(100% - 4rem);
  padding-bottom: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0;
`;

export const Body = styled.div`
  box-sizing: border-box;
  direction: inherit;
  display: block;
  height: 100%;
  overflow: auto;
  position: relative;
  visibility: visible;
  width: 100%;
`;

export const UserPanel = styled.div`
  border-bottom: 1px solid #4f5962;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  padding-bottom: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
  display: flex;
`;

export const UserPanelImage = styled.div`
  display: inline-block;
  padding-left: 0.8rem;
  white-space: nowrap;

  > img {
    border-radius: 50%;
    border-style: none;
    height: auto;
    vertical-align: middle;
    width: 2.1rem;
  }
`;

export const UserPanelInfo = styled.div`
  transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
  display: inline-block;
  padding: 5px 5px 5px 10px;
  overflow: hidden;
  white-space: nowrap;

  > span {
    color: #c2c7d0;
    display: block;
  }
`;

export const Menu = styled.ul`
  position: relative;
  flex-direction: column;
  display: flex;
  margin-top: 0;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const MenuHeader = styled.li`
  font-size: 14px;
  text-transform: uppercase;
  padding: 26px 16px 8px;
  background: inherit;
  color: #d0d4db;
  overflow: hidden;
  text-overflow: clip;

  &:first-of-type {
    padding-top: 0;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 0;
  display: list-item;
`;

export const MenuItemLink = styled.a`
  box-sizing: border-box;
  position: relative;
  margin-bottom: 3px;
  cursor: pointer;
  color: ${({ active }) => (active ? '#FFFFFF' : '#c2c7d0')};
  border-radius: 4px;
  display: block;
  line-height: 24px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px 16px;
  width: 100%;
  border-bottom: 0;
  background-color: ${({ active, opened }) =>
    active ? '#007bff' : opened ? 'rgba(255,255,255,.1)' : 'inherit'};

  > i {
    font-size: 18px;
    margin-right: 6px;
    text-align: center;
    width: 26px;
  }

  > p {
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
    display: inline-block;
    font-size: 16px;
    margin: 0;

    > i {
      transition: transform ease-in-out 0.3s, -webkit-transform ease-in-out 0.3s;
      position: absolute;
      right: 16px;
      top: 12px;
    }

    > span.badge {
      transition: transform ease-in-out 0.3s, -webkit-transform ease-in-out 0.3s;
      position: absolute;
      right: 16px;
      top: 12px;
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 4px;
      padding: 3px 5px;

      &.new {
        color: #fff;
        background-color: #dc3545;
      }

      &.info {
        color: #fff;
        background-color: #17a2b8;
      }

      &:nth-child(2) {
        right: 40px;
      }
    }
  }
`;

export const SubMenu = styled.ul`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: 0 0;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-top: 0;
`;

export const SubMenuItem = styled.li`
  margin-bottom: 0;
  display: list-item;
`;

export const SubMenuItemLink = styled.a`
  color: ${({ active }) => (active ? '#343a40' : '#c2c7d0')};
  position: relative;
  margin-bottom: 3px;
  border-radius: 4px;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  background-color: ${({ active }) =>
    active ? 'rgba(255,255,255,.9)' : 'transparent'};

  > i {
    font-size: 18px;
    margin-right: 6px;
    text-align: center;
    width: 26px;
  }

  > p {
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
    display: inline-block;
    font-size: 16px;
    margin: 0;

    > i {
      transition: transform ease-in-out 0.3s, -webkit-transform ease-in-out 0.3s;
      position: absolute;
      right: 16px;
      top: 12px;
    }
  }
`;
