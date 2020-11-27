import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './styles';

const Alert = (props) => {
  const { children, show } = props;
  return (
    <Root show={show}>
      <div className="alert">
        <span className="alert__icon">!</span>
        <span className="alert__text">{children}</span>
      </div>
    </Root>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
};

export default Alert;
