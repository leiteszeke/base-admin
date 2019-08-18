// Dependencies
import React, { useState } from 'react';
// Components
import Header from '../Header';
import Sidebar from '../Sidebar';
// Styled
import {
    Wrapper,
    SidebarOverlay,
    Content,
} from './styles';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const menuToggle = () => setIsOpen(!isOpen);

    return (
        <Wrapper>
            <Header
                onMenuToggle={ menuToggle }
                opened={ isOpen }
            />
            <Sidebar opened={ isOpen }/>
            <SidebarOverlay onClick={ menuToggle } show={ isOpen } />
            <Content opened={ isOpen }>
                { children }
            </Content>
        </Wrapper>
    )
}

export default Layout;