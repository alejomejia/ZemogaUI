import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

import { Root } from './styles';

const VoteGrid = (props) => {
  const { title, children } = props;

  return (
    <Root>
      <Container boxed>
        <div className="vote-grid">
          {title && <h2 className="vote-grid__title">{title}</h2>}
          <div className="vote-grid__wrapper">{children}</div>
        </div>
      </Container>
    </Root>
  );
};

VoteGrid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default VoteGrid;
