import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './styles';

const Header = (props) => {
  const { children } = props;

  return (
    <Root>
      <div className="header__container">{children}</div>
    </Root>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
