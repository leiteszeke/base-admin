// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
// Styled
import {
  Wrapper,
  Navbar,
  NavbarItem,
  NavItemLink,
  SearchForm,
  SearchContainer,
  InputAppend,
  NavbarIcons
} from './styles';

const Header = ({ opened, onMenuToggle, withSearch }) => {
  const leftItems = [{ icon: 'fas fa-bars', onClick: () => onMenuToggle() }];

  const rightItems = [];

  const renderItems = items =>
    items.map((item, index) => (
      <NavbarItem className={item.classes} key={index}>
        <NavItemLink
          onClick={e => item.onClick() || e.preventDefault()}
          href={item.url || '#'}
        >
          {item.icon ? (
            <>
              <i className={item.icon} />
              {item.badge && (
                <span className={item.badge.type}>{item.badge.count}</span>
              )}
            </>
          ) : (
            item.name
          )}
        </NavItemLink>
      </NavbarItem>
    ));

  const Search = () => (
    <SearchForm>
      <SearchContainer>
        <input placeholder="Buscar..." type="text" />
        <InputAppend>
          <button>
            <i className="fas fa-search" />
          </button>
        </InputAppend>
      </SearchContainer>
    </SearchForm>
  );

  return (
    <Wrapper isOpened={opened}>
      <Navbar>{renderItems(leftItems)}</Navbar>
      {withSearch && <Search />}
      <NavbarIcons>{renderItems(rightItems)}</NavbarIcons>
    </Wrapper>
  );
};

Header.propTypes = {
  opened: PropTypes.bool,
  onMenuToggle: PropTypes.func,
  withSearch: PropTypes.bool
};

Header.defaultProps = {
  opened: true,
  withSearch: true
};

export default Header;
