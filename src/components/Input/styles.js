// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 0;
  box-sizing: border-box;
  height: 40px;
  position: relative;
  width: 100%;
`;

export const InputElement = styled.input`
  border: none;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  height: 40px;
  font-size: 14px;
  outline: none;
  padding: 4px;
  padding-top: 12px;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  height: 40px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: 0.2s;

  &.filled {
    font-size: 10px;
    height: 12px;
    opacity: 1;
    top: 4px;
  }
`;
