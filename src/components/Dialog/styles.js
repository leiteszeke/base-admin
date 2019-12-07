// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3001;
`;

export const Body = styled.div`
  align-content: flex-start;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-wrap: wrap;
  height: 60%;
  overflow: hidden;
  position: relative;
  width: 60%;
`;

export const Header = styled.div`
  height: 40px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  width: 100%;

  &.with-header {
    height: calc(100% - 40px);
  }

  &.with-footer {
    height: calc(100% - 60px);
  }

  &.full {
    height: calc(100% - 100px);
  }
`;

export const Footer = styled.div`
  bottom: 0;
  height: 60px;
  position: absolute;
  width: 100%;
`;
