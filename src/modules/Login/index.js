// Dependencies
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
// Config
import { API_URL } from '#env';
// Styled
import {
  Wrapper,
  LoginBox,
  LoginLogo,
  Card,
  CardBody,
  InputContainer,
  InputAppend,
  FormFooter
} from './styles';

const Login = ({ history }) => {
  const [data, setData] = useState({});

  const signIn = e => {
    e.preventDefault();

    axios.post(`${API_URL}login`, data).then(res => {
      if (!res.data.error) {
        localStorage.setItem(
          'base-admin',
          JSON.stringify({
            access_token: res.data.data.access_token,
            user: res.data.data.user
          })
        );

        return history.push('/');
      }
    });
  };

  const setValue = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Wrapper>
      <LoginBox>
        <LoginLogo>
          <b>Juntos</b> en Casa
        </LoginLogo>
        <Card>
          <CardBody>
            <p>Ingresa para utilizar el sistema </p>
            <form onSubmit={signIn}>
              <InputContainer>
                <input
                  onChange={setValue}
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <InputAppend>
                  <div>
                    <span className="fas fa-envelope" />
                  </div>
                </InputAppend>
              </InputContainer>
              <InputContainer>
                <input
                  onChange={setValue}
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                />
                <InputAppend>
                  <div>
                    <span className="fas fa-lock" />
                  </div>
                </InputAppend>
              </InputContainer>
              <FormFooter>
                <div>
                  <button type="submit">Ingresar</button>
                </div>
              </FormFooter>
            </form>
          </CardBody>
        </Card>
      </LoginBox>
    </Wrapper>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default withRouter(Login);
