import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

import { Root } from './styles';

const Closing = (props) => {
  const { daysLeft } = props;

  return (
    <Root>
      <Container classes="closing__wrapper" align="center" boxed>
        <span className="closing__text">Closing in</span>
        <span className="closing__days">
          <strong>{daysLeft}</strong> days
        </span>
      </Container>
    </Root>
  );
};

Closing.propTypes = {
  daysLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Closing;
