// Dependencies
import React, { useState } from 'react';
import axios from 'axios';
// Config
import { API_URL } from '../../env';
// Styled
import {
    Wrapper,
    LoginBox,
    LoginLogo,
    Card,
    CardBody,
    InputContainer,
    InputAppend,
    FormFooter,
} from './styles';

const Login = () => {
    const [data, setData] = useState({});

    const signIn = () => {
        axios.post(`${ API_URL }login`, data)
            .then(res => {
                if (!res.data.error) {

                }
            });
    }

    const setValue = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    return (
        <Wrapper>
            <LoginBox>
                <LoginLogo>
                    <b>Admin</b>LTE
                </LoginLogo>
                <Card>
                    <CardBody>
                        <p>Sign in to start your session</p>
                        <form>
                            <InputContainer>
                                <input onChange={ setValue } name="email" placeholder="Email" type="email" />
                                <InputAppend>
                                    <div>
                                        <span className="fas fa-envelope" />
                                    </div>
                                </InputAppend>
                            </InputContainer>
                            <InputContainer>
                                <input onChange={ setValue } name="password" placeholder="Password" type="password" />
                                <InputAppend>
                                    <div>
                                        <span className="fas fa-lock" />
                                    </div>
                                </InputAppend>
                            </InputContainer>
                            <FormFooter>
                                <div>
                                    <button type="button" onClick={ signIn }>Sign In</button>
                                </div>
                            </FormFooter>
                        </form>
                    </CardBody>
                </Card>
            </LoginBox>
        </Wrapper>
    )
}

export default Login;