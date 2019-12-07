// Dependencies
import React from 'react';
import classnames from 'classnames';
import { createPortal } from 'react-dom';
// Styled
import { Wrapper, Body, Header, Content, Footer } from './styles';

const Dialog = ({ content, footer, header, show }) => {
  if (!show) return null;

  return createPortal(
    <Wrapper>
      <Body>
        {header && <Header>{header}</Header>}

        <Content
          className={classnames({
            'with-header': header && !footer,
            'with-footer': !header && footer,
            full: header && footer
          })}
        >
          {content}
        </Content>

        {footer && <Footer>{footer}</Footer>}
      </Body>
    </Wrapper>,
    document.body
  );
};

export default Dialog;
