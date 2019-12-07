// Dependencies
import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// Styled
import {
  Wrapper,
  Content,
  Body,
  UserPanel,
  UserPanelImage,
  UserPanelInfo,
  Menu,
  MenuHeader,
  MenuItem,
  MenuItemLink,
  SubMenu,
  SubMenuItem,
  SubMenuItemLink
} from './styles';
// Images
import LogoImage from '../../images/logo-square.png';

const Sidebar = ({ opened, user, userMenu }) => {
  const [items, setItems] = useState(userMenu);
  const [, setUpdated] = useState(null);

  const toggleMenu = index => () => {
    items[index].opened = !items[index].opened;
    setItems(items);
    setUpdated(new Date());
  };

  const renderMenu = () =>
    items.map((item, index) =>
      item.type && item.type === 'label' ? (
        <MenuHeader key={index}>{item.name}</MenuHeader>
      ) : (
        <MenuItem key={index}>
          <MenuItemLink
            active={item.active}
            href={item.url}
            onClick={toggleMenu(index)}
            opened={item.opened}
          >
            <i className={item.icon} />
            <p>
              {item.name}
              {item.subitems && (
                <i
                  className={classnames('fas', {
                    'fa-angle-left': !item.opened,
                    'fa-angle-down': item.opened
                  })}
                />
              )}
              {item.new && <span className="badge new">New</span>}
              {item.badge && (
                <span className={`badge ${item.badge.type}`}>
                  {item.badge.count}
                </span>
              )}
            </p>
          </MenuItemLink>
          {item.subitems && (
            <SubMenu show={item.opened}>
              {item.subitems.map((subitem, subindex) => (
                <SubMenuItem key={subindex}>
                  <SubMenuItemLink active={subitem.active} href={subitem.url}>
                    <i className={subitem.icon} />
                    <p>{subitem.name}</p>
                  </SubMenuItemLink>
                </SubMenuItem>
              ))}
            </SubMenu>
          )}
        </MenuItem>
      )
    );

  return (
    <Wrapper isOpened={opened}>
      <a href="/">
        <img src={LogoImage} alt="Logo" />
        <span>Juntos en Casa</span>
      </a>
      <Content>
        <Body>
          <UserPanel>
            <UserPanelImage>
              <img
                src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg"
                alt={`${user.name} ${user.lastname} Profile`}
              />
            </UserPanelImage>
            <UserPanelInfo>
              <span>
                {user.name} {user.lastname}
              </span>
            </UserPanelInfo>
          </UserPanel>
          <Menu>{renderMenu()}</Menu>
        </Body>
      </Content>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  opened: PropTypes.bool,
  user: PropTypes.object,
  userMenu: PropTypes.array
};

Sidebar.defaultProps = {
  opened: true,
  user: {},
  userMenu: []
};

export default Sidebar;
