import React from 'react';
import { Link } from 'react-router-dom';

import { Root } from './styles';

const Logo = () => {
  return (
    <Root>
      <div className="logo__wrapper">
        <Link className="logo__text" to="/">
          Rule of Thumb.
        </Link>
      </div>
    </Root>
  );
};

export default Logo;
