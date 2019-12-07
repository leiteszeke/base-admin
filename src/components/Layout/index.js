// Dependencies
import React, { useEffect, useState, useMemo } from 'react';
// Components
import Header from '../Header';
import Sidebar from '../Sidebar';
import { getMenu } from '../Menu';
// Helpers
import { getUser } from '../../helpers/session';
// Styled
import { Wrapper, SidebarOverlay, Content } from './styles';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const menuToggle = () => setIsOpen(!isOpen);
  const user = getUser();
  const userMenu = useMemo(() => getMenu(), []);

  useEffect(() => {
    document.addEventListener('toggleSidebar', menuToggle);
    return () => document.removeEventListener('toggleSidebar', menuToggle);
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <Header onMenuToggle={menuToggle} opened={isOpen} withSearch={false} />
      <Sidebar opened={isOpen} user={user} userMenu={userMenu} />
      <SidebarOverlay onClick={menuToggle} show={isOpen} />
      <Content opened={isOpen}>{children}</Content>
    </Wrapper>
  );
};

export default React.memo(Layout);
