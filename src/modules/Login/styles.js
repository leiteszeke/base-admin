// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #e9ecef;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const LoginBox = styled.div`
  width: 360px;
`;

export const LoginLogo = styled.div`
  font-size: 35px;
  font-weight: 300;
  margin-bottom: 25px;
  text-align: center;

  a {
    color: #495057;
    text-decoration: none;
  }
`;

export const Card = styled.div`
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
`;

export const CardBody = styled.div`
  background: #fff;
  border-top: 0;
  color: #666;
  padding: 20px;
  flex: 1 1 auto;

  p {
    margin: 0;
    padding: 0 20px 20px;
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 16px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;

  input {
    border-right: 0;
    border-radius: 4px 0 0 4px;
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
    display: block;
    padding: 0.375rem 0.75rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    box-shadow: inset 0 0 0 transparent;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
  }
`;

export const InputAppend = styled.div`
  margin-left: -1px;
  display: flex;

  div {
    background-color: transparent;
    border-left: 0;
    color: #777;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #ced4da;
    border-radius: 0 4px 4px 0;
  }
`;

export const FormFooter = styled.div`
  button {
    border-radius: 0;
    border-width: 1px;
    box-shadow: none;
    display: block;
    width: 100%;
    color: #fff;
    background-color: #007bff;
    outline: none;
    border-color: #007bff;
    font-weight: 400;
    text-align: center;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 16px;
    line-height: 1.5;
    transition: color 0.15s;
  }
`;
