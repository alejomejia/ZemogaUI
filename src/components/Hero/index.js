import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Closing from '../Closing';

import { Root } from './styles';

const Hero = (props) => {
  const { image, daysLeft, children } = props;

  return (
    <Root image={image}>
      <Container boxed>{children}</Container>
      <Closing daysLeft={daysLeft} />
    </Root>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  daysLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

export default Hero;
