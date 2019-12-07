// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.nav`
  background: #ffffff;
  border-bottom: 1px solid #dee2e6;
  z-index: 1032;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 8px;
  z-index: 1032;

  @media (min-width: 576px) {
    transition: margin-left 0.3s ease-in-out;
    margin-left: ${({ isOpened }) => (isOpened ? '250px' : 0)};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    z-index: 1030;
  }
`;

export const Navbar = styled.ul`
  flex-direction: row;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
`;

export const NavbarItem = styled.li`
  margin: 0;

  @media (max-width: 576px) {
    &.d-none {
      display: none;
    }
  }
`;

export const NavItemLink = styled.a`
  color: rgba(0, 0, 0, 0.5);
  padding: 08px 16px;
  position: relative;
  display: block;
  text-decoration: none;

  span {
    font-size: 10px;
    font-weight: 300;
    padding: 2px 4px;
    position: absolute;
    right: 5px;
    top: 9px;
    display: inline-block;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 4px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &.warning {
      background-color: #ffc107;
      color: #1f2d3d;
    }

    &.danger {
      background-color: #dc3545;
      color: #fff;
    }
  }
`;

export const SearchForm = styled.form`
  margin-left: 16px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  flex: 1;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  @media (min-width: 576px) {
    width: auto;
  }

  input {
    background-color: #f2f4f6;
    border: 0;
    padding: 4px 8px;
    font-size: 12px;
    height: 31px;
    font-weight: 400;
    color: #495057;
    background-clip: padding-box;
    box-shadow: inset 0 0 0 transparent;
    transition: none;
    line-height: 1.5;
    border-radius: 4px 0 0 4px;
    outline: none;
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;

    @media (min-width: 576px) {
      vertical-align: middle;
      display: inline-block;
    }
  }
`;

export const InputAppend = styled.div`
  margin-left: 0;
  display: flex;

  button {
    padding: 4px 8px;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 0 4px 4px 0;
    background-color: #f2f4f6;
    border: 0;
  }
`;

export const NavbarIcons = styled.ul`
  flex-direction: row;
  margin-left: auto;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-top: 0;
`;
