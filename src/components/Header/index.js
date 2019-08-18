// Dependencies
import React from 'react';
// Styled
import {
    Wrapper,
    Navbar,
    NavbarItem,
    NavItemLink,
    SearchForm,
    SearchContainer,
    InputAppend,
    NavbarIcons,
} from './styles';

const Header = ({ opened, onMenuToggle }) => {
    const leftItems = [
        { icon: 'fas fa-bars', onClick: () => onMenuToggle() },
        { name: 'Home', classes: 'd-none' },
        { name: 'Contact', classes: 'd-none' }
    ];

    const rightItems = [
        { icon: 'far fa-comments', badge: { type: 'danger', count: 3 } },
        { icon: 'far fa-bell', badge: { type: 'warning', count: 15 } },
        { icon: 'fas fa-th-large' }
    ];

    const renderItems = (items) =>
        items.map((item, index) => (
            <NavbarItem className={ item.classes } key={ index }>
                <NavItemLink onClick={ e => item.onClick() || e.preventDefault() } href={ item.url || '#' }>
                    { item.icon
                        ? (
                            <>
                                <i className={ item.icon } />
                                { item.badge &&
                                    <span className={ item.badge.type }>{ item.badge.count }</span>
                                }
                            </>
                        )
                        : item.name
                    }
                </NavItemLink>
            </NavbarItem>
        ))

    const Search = () => (
        <SearchForm>
            <SearchContainer>
                <input placeholder="Search" type="text" />
                <InputAppend>
                    <button>
                        <i className="fas fa-search" />
                    </button>
                </InputAppend>
            </SearchContainer>
        </SearchForm>
    )

    return (
        <Wrapper isOpened={ opened }>
            <Navbar>{ renderItems(leftItems) }</Navbar>
            <Search />
            <NavbarIcons>{ renderItems(rightItems) }</NavbarIcons>
        </Wrapper>
    )
}

export default Header;