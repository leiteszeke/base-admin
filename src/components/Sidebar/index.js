// Dependencies
import React, { useState } from 'react';
import classnames from 'classnames';
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
    SubMenuItemLink,
} from './styles';

const menuItems = [
    {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        url: '#',
        active: true,
        opened: true,
        subitems: [
            {
                name: 'Dashboard v1',
                url: '/',
                icon: 'far fa-circle',
                active: true,
            },
            {
                name: 'Dashboard v2',
                url: '/',
                icon: 'far fa-circle',
                active: false,
            },
        ]
    },
    {
        name: 'Widgets',
        icon: 'fas fa-th',
        url: '/',
        new: true,
    },
    {
        name: 'Layout Options',
        icon: 'fas fa-copy',
        badge: { count: 6, type: 'info' },
        url: '#',
        subitems: [
            {
                name: 'Top Items',
                url: '/',
                icon: 'far fa-circle',
            },
            {
                name: 'Boxed',
                url: '/',
                icon: 'far fa-circle',
            }
        ]
    },
    {
        name: 'Examples',
        type: 'label',
    },
    {
        name: 'Calendar',
        icon: 'far fa-calendar',
        badge: { count: 2, type: 'info' },
        url: '#',
    },
]

const Sidebar = ({ opened }) => {
    const [items, setItems] = useState(menuItems);
    const [, setUpdated] = useState(null);

    const toggleMenu = index => () => {
        items[index].opened = !items[index].opened;
        setItems(items);
        setUpdated(new Date());
    }

    const renderMenu = () =>
        items.map((item, index) => (
            item.type && item.type === 'label'
                ? <MenuHeader key={ index }>{ item.name }</MenuHeader>
                : (
                    <MenuItem key={ index }>
                        <MenuItemLink active={ item.active } href={ item.url } onClick={ toggleMenu(index) } opened={ item.opened }>
                            <i className={ item.icon } />
                            <p>
                                { item.name }
                                { item.subitems && <i className={ classnames('fas', {
                                    'fa-angle-left': !item.opened,
                                    'fa-angle-down': item.opened,
                                }) } /> }
                                { item.new && <span className="badge new">New</span> }
                                { item.badge && <span className={ `badge ${ item.badge.type }` }>{ item.badge.count }</span> }
                            </p>
                        </MenuItemLink>
                        { item.subitems && (
                            <SubMenu show={ item.opened }>
                                { item.subitems.map((subitem, subindex) => (
                                    <SubMenuItem key={ subindex }>
                                        <SubMenuItemLink active={ subitem.active } href={ subitem.url }>
                                            <i className={ subitem.icon } />
                                            <p>{ subitem.name }</p>
                                        </SubMenuItemLink>
                                    </SubMenuItem>
                                ))}
                            </SubMenu>
                        ) }
                    </MenuItem>
                )
        ))

    return (
        <Wrapper isOpened={ opened }>
            <a href="/">
                <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png" alt="Logo" />
                <span>AdminLTE 3</span>
            </a>
            <Content>
                <Body>
                    <UserPanel>
                        <UserPanelImage>
                            <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg" alt="User Profile" />
                        </UserPanelImage>
                        <UserPanelInfo>
                            <span>Alexander Pierce</span>
                        </UserPanelInfo>
                    </UserPanel>
                    <Menu>
                        { renderMenu() }
                    </Menu>
                </Body>
            </Content>
        </Wrapper>
    )
}

export default Sidebar;