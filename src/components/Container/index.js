import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './styles';

const Container = props => {

  const { classes, justify, align, boxed, children } = props;

  return (
    <Root justify={justify} align={align} boxed={boxed}>
      <div className={`container ${classes ? classes : ''}`}>{children}</div>
    </Root>
  );
};

Container.propTypes = {
  classes: PropTypes.string,
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  align: PropTypes.oneOf(['stretch', 'center', 'start', 'end']),
  boxed: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
