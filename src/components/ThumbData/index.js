import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './styles';

const ThumbData = (props) => {
  const { type, perc } = props;

  const renderThumb = (type, perc) => {
    if (perc === 0) {
      return null;
    } else {
      if (type === 'up') {
        return (
          <div className="thumbs-data up">
            <div className="thumbs-data__info">
              <i className="thumbs-data__icon fas fa-thumbs-up"></i>
              <span className="thumbs-data__perc">{perc}%</span>
            </div>
          </div>
        );
      } else if (type === 'down') {
        return (
          <div className="thumbs-data down">
            <div className="thumbs-data__info">
              <span className="thumbs-data__perc">{perc}%</span>
              <i className="thumbs-data__icon fas fa-thumbs-down"></i>
            </div>
          </div>
        );
      }
    }
  };

  return <Root width={perc}>{renderThumb(type, perc)}</Root>;
};

ThumbData.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  perc: PropTypes.number.isRequired,
};

export default ThumbData;
